import express from "express";
import { user, alltransactions, kyc, buyStock, sellStock, getUserStocks, getUserTrades, updateWallet, getStockList, getStockLogo } from "../controllers/user.js";

const router = express.Router()

router.get("/user", user )
router.get("/alltransactions" , alltransactions )
router.post("/kyc", kyc)
router.post("/stock/buy", buyStock)
router.get("/stock/sell/:stockId", sellStock)
router.get("/stocks", getUserStocks)
router.get("/allstocks", getStockList)
router.get("/trades", getUserTrades)
router.post("/wallet/update", updateWallet)
router.get("/stock/logo/:stockName", getStockLogo)



export default router