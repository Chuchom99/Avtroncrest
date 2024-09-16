
import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";
import { trades } from "./transaction.js";

const settingsId = 1;



export const getusers = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT users_id, name, email, phone, nationality, main_balance, ref_code AS referral, phone, created_at, kyc_status FROM users JOIN balance b ON users.users_id = b.balance_id";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}


export const updateusers = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    const userId = req.params.userId;
    // console.log(userId);
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin === 0) return res.status(403).json("Access Denied");
        const q ="UPDATE users SET name=?, email=?, phone=?, nationality=?  WHERE users_id=" + userId;

        db.query(
            q,
            [
              req.body.name,
              req.body.email,
              req.body.phone,
              req.body.nationality,
            ],
            (err, data) => {
              if (err) res.status(500).json(err);
              if (data.affectedRows > 0) return res.json("Updated!");
              return res.status(403).json({message: "Wallet updated successfully"});
            }
          );
      
      });
}



export const getinvestors = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT users_id, name, email, phone, nationality, main_balance, SUM(t.amount) AS 'total_investment' FROM users JOIN balance b ON users.users_id = b.balance_id JOIN transaction t ON b.balance_id = t.balance_id  WHERE t.type = 'DEPOSIT' GROUP BY users.users_id";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const getalltransactions = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const userId = req.params.userId;
        const q ="SELECT * FROM transaction WHERE balance_id=" + userId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const getTotalBalance = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const is_admin = userInfo.is_admin;
      if(is_admin !== 1) return res.status(403).json("Access Denied");
      const userId = req.params.userId;
      const q ="SELECT SUM(CASE WHEN type='DEPOSIT' AND trans_status = 'APPROVED' THEN amount ELSE 0 END)- SUM(CASE WHEN type='WITHDRAWAL' AND trans_status = 'APPROVED' THEN amount ELSE 0 END) AS total_balance FROM transaction";
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
}


//kyc

export const getkycreq = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT users_id, email, name, kyc_status FROM users WHERE kyc_status = 'APPLIED'" ;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const postkycreq = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const userId = req.params.userId;
        const q = "UPDATE users SET kyc_status = 'APPROVED' WHERE users_id=" + userId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("updated");
        });
      });
}

//deposit

export const getdepositreq = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT t.*, users_id, email, name, nationality FROM transaction t JOIN users ON users.users_id = t.balance_id WHERE t.trans_status = 'PENDING' AND t.type = 'DEPOSIT'";
        //SELECT t.*, users_id, email, name, nationality FROM transaction t JOIN users ON users.users_id = t.balance_id WHERE t.trans_status = 'PENDING' AND t.type = 'DEPOSIT' GROUP BY t.transaction_id;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const depositApproved = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.transId;
        const q ="UPDATE transaction SET trans_status = 'APPROVED' WHERE transaction_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

export const depositFailed = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.transId;
        const q ="UPDATE transaction SET trans_status = 'FAILED' WHERE transaction_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

//stock routes
export const getstockreq = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT s.*, users_id, email, users.name AS user, nationality FROM stock s JOIN users ON users.users_id = s.balance_id WHERE s.status = 'PENDING'";
        //SELECT t.*, users_id, email, name, nationality FROM transaction t JOIN users ON users.users_id = t.balance_id WHERE t.trans_status = 'PENDING' AND t.type = 'DEPOSIT' GROUP BY t.transaction_id;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const stockApproved = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.stockId;
        const q ="UPDATE stock SET status = 'APPROVED' WHERE stock_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

export const stockFailed = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const is_admin = userInfo.is_admin;
      if(is_admin !== 1) return res.status(403).json("Access Denied");
      const transId = req.params.stockId;
      const q ="UPDATE stock SET status = 'FAILED' WHERE stock_id=" + transId;
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("success");
      });
    });
}


export const stockCancelled = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.stockId;
        const q ="UPDATE stock SET status = 'CANCELLED' WHERE stock_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}


//withdrawal

export const getwithdrawalreq = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT t.*, users_id, email, name, nationality FROM transaction t JOIN users ON users.users_id = t.balance_id WHERE t.trans_status = 'PENDING' AND t.type = 'WITHDRAWAL'";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}

export const withdrawalApproved = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.transId;
        const q = "UPDATE transaction SET trans_status = 'APPROVED' WHERE transaction_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

export const withdrawalFailed = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const transId = req.params.transId;
        const q = "UPDATE transaction SET trans_status = 'FAILED' WHERE transaction_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

export const withdrawalCancelled = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const transId = req.params.transId;
        const q = "UPDATE transaction SET trans_status = 'CANCELLED' WHERE transaction_id=" + transId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("success");
        });
      });
}

//trades

export const createTrade = (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    const userId = req.params.userId;
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin === 0) return res.status(403).json("Access Denied");
        const q ="INSERT  INTO trades (date, amount, balance_id, stock)  VALUES (?,?,?,?)";
        // const q ="INSERT  INTO trades (date, amount, balance_id, admin_stocks_id)  VALUES (?,?,?,?)";


        db.query(
            q,
            [
              moment(Date.now()).format("YYYY-MM-DD"),
              req.body.amount,
              req.body.balance_id,
              req.body.stock
            ],
            (err, data) => {
              if (err) res.status(500).json(err);
              if (data.affectedRows > 0) return res.json({message: "Trade created successfully"});
              return res.status(403).json("You can update only your post!");
            }
          );
      
      });
  
}
export const getAllTrades = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const q ="SELECT trades.*, users.name AS user, email, trading_balance FROM trades JOIN balance b ON b.balance_id=trades.balance_id JOIN users ON users.users_id=b.balance_id ";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });

}


export const getUserTrades = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const userId = req.params.userId;
        const q ="SELECT * FROM trades WHERE balance_id ="+ userId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
}


export const deleteTrade = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const is_admin = userInfo.is_admin;
        if(is_admin !== 1) return res.status(403).json("Access Denied");
        const tradeId = req.params.tradeId
        const q ="DELETE FROM trades WHERE trades.trade_id = " + tradeId;
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json({message: "Wallet updated successfully"});
        });
      });

}

// export const updateAdminWallet = (req, res) => {
//     const token = req.cookies.accessToken;
//     if (!token) return res.status(401).json("Not logged in!");
//     jwt.verify(token, "secretkey", (err, userInfo) => {
//         if (err) return res.status(403).json("Token is not valid!");
//         const is_admin = userInfo.is_admin;
//         if(is_admin === 0) return res.status(403).json("Access Denied");
//         // const q ="UPDATE admin_settings SET admin_wallet = ?  WHERE admin_id =" + settingsId;
//         const q ="INSERT  INTO admin_wallet (`wallet_type`, `wallet_address`)  VALUES (?,?)";

//         db.query(
//             q,
//             [          
//               req.body.wallet_type,
//               req.body.wallet_address
//             ],
//             (err, data) => {
//               if (err) res.status(500).json(err);
//               return res.status(403).json("Wallet already exists!");
//               return res.status(200).json(data);

//             }
//           );
      
//       });
// }

export const getAdminWallet = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const q ="SELECT * FROM newinv.admin_wallet";
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        });
      });
   
}

export const updateAdminWallet = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const is_admin = userInfo.is_admin;
      if(is_admin === 0) return res.status(403).json("Access Denied");
      
      const q = "UPDATE admin_wallet SET `wallet_address` = ? WHERE `wallet_type` = ?";

      db.query(
          q,
          [
            req.body.wallet_address,
            req.body.wallet_type
          ],
          (err, data) => {
            if (err) {
              if (err.code === 'ER_DUP_ENTRY') {
                // Handle duplicate entry error (wallet_type already exists)
                return res.status(409).json("Wallet type already exists!");
              } else {
                // Handle other errors
                return res.status(500).json(err);
              }
            }
            return res.status(200).json({
              message: "Wallet updated successfully",
              wallet_type: req.body.wallet_type,
              wallet_address: req.body.wallet_address
            });
          }
      );
  });
}
