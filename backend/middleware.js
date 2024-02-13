const { SECRET_KEY } = require("./config.js");
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
        })
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.json({}).status(403);

        }

    } catch (err) {
        return res.json({}).status(403);
    }

}

module.exports = { authMiddleware }