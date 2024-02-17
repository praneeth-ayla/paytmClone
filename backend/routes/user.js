const express = require('express');
const zod = require('zod')
const { User } = require('../db.js')
const { JWT_SECRET } = require('../config.js');
const { authMiddleware } = require('../middleware.js');
const jwt = require('jsonwebtoken')


const router = express.Router();


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6).max(18),
    firstname: zod.string(),
    lastname: zod.string(),
})


router.post("/signup", async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs ",
        })
    }


    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const userData = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname
    })
    const userId = userData._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET)


    res.json({
        msg: "User created successfully",
        token: token
    })
    console.log(User._id)
})


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6).max(18)
})

router.post("/signin", async (req, res) => {
    const body = req.body;

    const { success } = signinSchema.safeParse(body);

    if (!success) {
        return res.json({
            msg: "Email doesn't exis taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    const token = jwt.sign({ userId: user._id }, JWT_SECRET)

    res.json({
        msg: "User Signin Successfull",
        token
    })
})

const updateSchema = zod.object({
    password: zod.string().min(6).max(18).optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }


    await User.updateOne({
        _id: req.userId
    }, req.body);

    res.json({
        message: "Updated successfully"
    })
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const allUsers = await User.find({
        $or: [
            { firstName: { $regex: filter } },
            { lastName: { $regex: filter } }
        ]
    })

    return res.json({
        allUsers
    })

})
module.exports = router;


