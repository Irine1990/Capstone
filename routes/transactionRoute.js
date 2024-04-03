const express = require("express");
const transactionModel = require("../models/transactionModel");




const router = express.Router();



router.post("/add-transaction", async (req, res) => {
    try {
        const { amount,type,reference,category } = req.body;
        console.log(res.body,amount,type,reference,category)
    
        const transactions = await transactionModel.create(req.body);
    
        return res.status(201).json({
          success: true,
          data: transactions,
        });
      } catch (err) {
        if (err.name === "ValidationError") {
          const messages = Object.values(err.errors).map((val) => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages,
          });
        } else {
          return res.status(500).json({
            success: false,
            error: "Server Error",
          });
        }
      }
    }
);

router.post("/get-all-transactions", async (req, res) => {
    try {
        const transactions = await transactionModel.find({userid:req.body.userid});
       
    return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions,    
       });}
       catch (error) {
        return res.status(500).json({
           success: false,
           error: "Server Error",
       });
    }
})
    
module.exports = router;