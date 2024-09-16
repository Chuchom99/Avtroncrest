import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
import transactionRoutes from "./routes/transactions.js"
import userAuth from "./routes/user.js"
import admin from "./routes/admin.js"


//middlewares
app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials",
    "", 
    true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3002",
      credentials: true,
    })
  );
  
  app.use("/api/auth", authRoutes);
  app.use("/api/trans", transactionRoutes);
  app.use("/api/user-info", userAuth);
  app.use("/api/admin", admin);

  app.listen(8800, () => {
    console.log("API working!");
  });
  

  // GK3UUO6KSMR1KZGI