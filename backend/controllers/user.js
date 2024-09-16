import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const user = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        const q ="SELECT * FROM users JOIN balance b ON users.users_id = b.balance_id WHERE users_id =" + use_id;
        //   "SELECT users.*,GROUP_CONCAT(transaction.value) AS trans_table, GROUP_CONCAT(stock.value) AS stocks, GROUP_CONCAT(trades.value) AS trades FROM users JOIN balance b ON users.users_id = b.balance_id JOIN transaction t ON b.balance_id = t.balance_id JOIN stock ON b.balance_id = stock.balance_id JOIN trades ON trades.balance_id = b.balance_id GROUP BY users.users_id";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          const { password, ...info } = data[0];
          return res.status(200).json({info:info});
        });
      });
}

export const alltransactions = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const use_id = userInfo.id;
      //console.log(userInfo);
      const q ="SELECT * FROM transaction WHERE balance_id ="+ use_id;
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
}

export const kyc = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const use_id = userInfo.id;
      // console.log(userInfo);
      const q ="UPDATE users SET kyc_status = 'APPLIED' WHERE users_id="+ use_id;
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Success");
      });
    });
}

export const buyStock  = (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        const q ="INSERT  INTO stock (name, amount, created_at, balance_id, logo, compounding)  VALUES (?,?,?,?,?,?)";

        db.query(
            q,
            [
              req.body.name,
              req.body.amount,
              moment(Date.now()).format("YYYY-MM-DD"),
              use_id,
              req.body.logo,
              req.body.compounding
            ],
            (err, data) => {
              if (err) res.status(500).json(err);
              if (data.affectedRows > 0) return res.json("success");
              return res.status(403).json("You can update only your post!");
            }
          );
      
      });
  
}
//;

export const sellStock = (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        const q ="UPDATE stock SET active = 0,status ='PENDING' WHERE stock_id=" + stockId;

        db.query(
            q,
            [],
            (err, data) => {
              if (err) res.status(500).json(err);
              if (data.affectedRows > 0) return res.json("success");
              return res.status(403).json("You can update only your post!");
            }
          );
      
      });
  
  
}

export const getUserStocks = (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        console.log(userInfo,"meeee");
        if(!use_id) return res.status(403).json("user id not found")
        const q ="SELECT stock_id, name, amount, status, DATE_FORMAT(created_at,'%Y-%m-%d') AS created_at, active, balance_id, logo, compounding FROM stock WHERE active=1 AND balance_id=" + use_id;

        db.query(
            q,
            [],
            (err, data) => {
              if (err) res.status(500).json(err);
              return res.status(200).json(data);
            }
          );
      
      });
  
}

export const getUserTrades = (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        const q ="SELECT * FROM trades WHERE balance_id=" + use_id;

        db.query(
            q,
            [],
            (err, data) => {
              if (err) res.status(500).json(err);
              return res.status(200).json(data);
            }
          );
      
      });

}




export const updateWallet = (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const use_id = userInfo.id;
        const q ="UPDATE users SET wallet=? WHERE users_id=" + use_id;

        db.query(
            q,
            [
              req.body.wallet
            ],
            (err, data) => {
              if (err) res.status(500).json(err);
              if (data.affectedRows > 0) return res.json("success");
              return res.status(403).json("You can update only your post!");
            }
          );
      
      });

    }

export const getStockList = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const use_id = userInfo.id;
      const q ="SELECT * FROM allstocks";
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.status(200).json(data);
      });
    });

}

export const getStockLogo = (req, res) => {
  const stockName = req.params.stockName;
  const q ="SELECT logo from allstocks WHERE name='" + stockName + "'";
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        const logo = data[0].logo;
        return res.status(200).json(logo);
      }); 

}