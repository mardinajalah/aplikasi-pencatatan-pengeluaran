"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const createDataUser = async (newData) => {
    return await prisma_1.default.user.create({
        data: newData
    });
};
const getDataUserByEmail = async (email) => {
    return await prisma_1.default.user.findUnique({
        where: { email }
    });
};
exports.default = { createDataUser, getDataUserByEmail };
