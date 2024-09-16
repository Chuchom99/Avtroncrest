import express from "express";
import { deposit, withdraw, trades } from "../controllers/transaction.js";

const router = express.Router()

router.post("/deposit", deposit)
router.post("/withdraw", withdraw)
router.get("/trades", trades)



export default router