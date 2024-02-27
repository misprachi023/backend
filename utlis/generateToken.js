import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SCERET, {
        expiresIn: '15d',
    });

    res.cookie('jwt', token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true,   // to prevent XSS attack cross site scripting attack
        sameSite: "strict", // to prevent CSRF attack cross site request forgery
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;