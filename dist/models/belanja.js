"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const getAllDataBelanja = async () => {
    return await prisma_1.default.belanja.findMany();
};
const createDataBelanja = async (newData) => {
    return await prisma_1.default.belanja.create({
        data: newData
    });
};
const updateDataBelanja = async (idBelanja, newData) => {
    return await prisma_1.default.belanja.update({
        where: { id: idBelanja },
        data: newData
    });
};
const deleteDataBelanja = async (idBelanja) => {
    return await prisma_1.default.belanja.delete({
        where: { id: idBelanja }
    });
};
exports.default = { getAllDataBelanja, createDataBelanja, updateDataBelanja, deleteDataBelanja };
