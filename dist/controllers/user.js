"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    const { nama, email, password, confermPassword } = req.body;
    if (password !== confermPassword) {
        res.status(400).json({
            message: "konfirmasi password salah"
        });
        return;
    }
    try {
        const hashPassword = await bcrypt_1.default.hash(password, 10);
        const newData = { nama, email, password: hashPassword };
        const result = await user_1.default.createDataUser(newData);
        res.status(201).json({
            message: "Registrasi berhasil",
            data: result
        });
    }
    catch {
        res.status(400).json({
            message: "email sudah ada"
        });
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await user_1.default.getDataUserByEmail(email);
        if (!result) {
            res.status(400).json({
                message: "email tidak di temukan"
            });
            return;
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, result.password);
        if (!isPasswordValid) {
            res.status(400).json({
                message: "Password salah"
            });
            return;
        }
        const payload = {
            id: result.id,
            nama: result.nama,
            email: result.email
        };
        const secret = process.env.JWT_SECRET;
        const expiresIn = 60 * 60 * 1;
        const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
        res.status(200).json({
            message: "login berhasil",
            data: {
                id: result.id,
                nama: result.nama,
                email: result.email
            },
            token
        });
    }
    catch {
        res.status(500).json({
            message: "server error"
        });
    }
};
exports.default = { register, login };
