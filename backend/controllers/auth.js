import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";

export const register = (req, res) => {
  // CHECK IF USER EXISTS
  const checkUserQuery = "SELECT * FROM users WHERE email = ?";

  db.query(checkUserQuery, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // CREATE A NEW USER
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const verified = 0;
    const is_admin = 0;
    

    const createUserQuery =
      "INSERT INTO users (`name`, `email`, `password`, `nationality`, `created_at`, `phone`,  `verified`, `is_admin`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.nationality,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.phone,
      verified,
      is_admin,
    ];

    db.query(createUserQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data);

      // Retrieve the newly created user
      const getUserQuery = "SELECT * FROM users WHERE users_id = ?";
      console.log(data.insertId);
      db.query(getUserQuery, [data.insertId], (err, userData) => {
        if (err) return res.status(500).json(err);

        const token = jwt.sign(
          { id: data[0].users_id, is_admin: data[0].is_admin },
          "secretkey"
        );

        const { password, ...userDetails } = userData[0];
        const id = { id: userData[0].users_id };
        const zero = 0.0;

        const createBalQuery =
          "INSERT into balance (`balance_id`, `asset_balance`, `trading_balance`, `wallet_address`, `main_balance`) VALUES (?, ?, ?, ?, ?)";

        const values = [id.id, zero, zero, zero, zero];
        db.query(createBalQuery, values, (err, data) => {
          if (err) return res.status(500).json(err);
        });

        res
          .cookie("accessToken", token, {
            httpOnly: true,
          })
          .status(200)
          .json(userDetails);
      });
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json("Wrong password or email!");

    const token = jwt.sign(
      { id: data[0].users_id, is_admin: data[0].is_admin },
      "secretkey"
    );

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
};
