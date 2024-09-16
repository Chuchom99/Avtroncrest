import express from "express";
import { getusers, updateusers, getinvestors, getalltransactions, 
getkycreq, getdepositreq, getstockreq, getwithdrawalreq, postkycreq, 
depositApproved, depositFailed, stockApproved, withdrawalApproved,
withdrawalFailed, withdrawalCancelled, createTrade, getAllTrades, deleteTrade, getUserTrades, updateAdminWallet,getAdminWallet, getTotalBalance, stockFailed  } from "../controllers/admin.js";


const router = express.Router();

router.get("/getusers", getusers);
router.post("/update/:userId", updateusers)
router.get("/investors", getinvestors)
router.get("/alltransactions/:userId", getalltransactions)
router.get("/kyc" , getkycreq)
router.get("/deposits", getdepositreq)
router.get("/deposits/approve/:transId", depositApproved)
router.get("/deposits/failed/:transId", depositFailed)
router.get("/stockreq", getstockreq)
router.get("/stock/approve/:stockId", stockApproved)
router.get("/stock/failed/:stockId", stockFailed)
router.get("/withdrawal", getwithdrawalreq)
router.get("/withdrawal/approve/:transId", withdrawalApproved)
router.get("/withdrawal/failed/:transId", withdrawalFailed)
router.get("/withdrawal/cancelled/:transId", withdrawalCancelled)
router.get("/postkyc/approve/:userId", postkycreq)
// router.get("/postkyc/approve/:userId", postkycreq)
router.get("/trades", getAllTrades)
router.get("/trades/:userId", getUserTrades)
router.post("/trades/new", createTrade)
router.get("/trades/delete/:tradeId", deleteTrade)
router.get("/wallet", getAdminWallet)
router.post("/wallet/update", updateAdminWallet)
router.get("/total/balance", getTotalBalance)

export default router