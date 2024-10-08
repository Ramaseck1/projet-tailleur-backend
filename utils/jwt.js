import jwt from "jsonwebtoken";

const createJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

export { createJWT, isTokenValid };
