const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({ userId: req.userId });
    res.json({
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const account = await Account.findOne({ userId: req.userId }).session(session);



    if (!account || account.balance < req.body.amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({ userId: req.body.to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid Account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -req.body.amount
        }
    }).session(session)

    await Account.updateOne({
        userId: req.body.to
    }, {
        $inc: { balance: req.body.amount }
    }).session(session);


    session.commitTransaction();

    res.json({
        msg: 'Transfer successful'
    })

})




module.exports = router