"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessValidation = (req, res, next) => {
    const validationReq = req;
    const { authorization } = validationReq.headers;
    if (!authorization) {
        res.status(400).json({
            message: 'token di perlukan'
        });
        return;
    }
    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    try {
        const jwtDecode = jsonwebtoken_1.default.verify(token, secret);
        if (typeof jwtDecode !== 'string') {
            validationReq.userData = jwtDecode;
        }
    }
    catch {
        res.status(400).json({
            message: "unauthorized"
        });
        return;
    }
    next();
};
exports.default = accessValidation;
