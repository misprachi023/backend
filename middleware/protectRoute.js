import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        if (!token) {
            return res.status(401).json({ error: "Unauthorized- No token provided" })
            // console.log("nooooooooooo")
        }
        const decoded = jwt.verify(token, process.env.JWT_SCERET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized- Invalid token provided" })
        }
        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(401).json({ error: "User not Find" })
        }
        req.user = user

        next()

    } catch (error) {
        console.log("error in protectRoute middleware: ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export default protectRoute;