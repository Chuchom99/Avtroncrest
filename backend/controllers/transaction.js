import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const deposit = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
     
        const balanceId =  userInfo.id;
        const type = 'DEPOSIT';
        console.log(userInfo.users_id);

        const q =
          "INSERT INTO transaction (`type`, `amount`, `method_details`, `balance_id` ) VALUES (?)";

        const values = [
          type,
          req.body.amount,
          req.body.method_details,
          balanceId 
        ];
    
        db.query(q, [values], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("Status pending");
        });
      });
    
}


export const withdraw = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
     
       
        const balanceId =  userInfo.id;
        const type = 'WITHDRAWAL';

        const q =
          "INSERT INTO transaction (`type`, `amount`, `method_details`, `balance_id`, `wallet` ) VALUES (?)";

        const values = [
          type,
          req.body.amount,
          req.body.method_details,
          balanceId,
          req.body.wallet
        ];
    
        db.query(q, [values], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("Status pending");
        });
      });
    
}

export const trades = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const use_id = userInfo.id;
      console.log(use_id);
      const q ="SELECT * FROM trades WHERE balance_id ="+ use_id;
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
}