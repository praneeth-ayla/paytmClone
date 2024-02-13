const express = require('express');
const zod = require('zod')
// import { User } from '../db';
const User = require('../db.js')
const SECRET_KEY = require('../config.js')


const router = express.Router();


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6).max(18),
    firstname: zod.string(),
    lastname: zod.string(),
})


router.post("/signup", async (req, res) => {
    const body = req.body
    console.log(body)
    const { isValid } = signupSchema.safeParse(body);

    if (!isValid) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if (user._id) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const userData = await User.create(body)
    const token = jwt.sign({
        userId: userData._id
    }, SECRET_KEY)
    res.json({
        msg: "User created successfully",
        token: token
    })
})


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6).max(18)
})

router.post("signin", async (req, res) => {
    const body = req.body;

    const { isValid } = signinSchema.safeParse(body);

    if (!isValid) {
        return res.json({
            msg: "Email doesn't exis taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    const token = jwt.sign({ userId: user._id }, SECRET_KEY)

    res.json({
        msg: "User Signin Successfull",
        token
    })
})



module.exports = router;