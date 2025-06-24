"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const belanja_1 = __importDefault(require("../models/belanja"));
const getAllBelanja = async (req, res) => {
    try {
        const result = await belanja_1.default.getAllDataBelanja();
        res.status(200).json({
            message: "data berhasil di tampilan",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        });
    }
};
const createBelanja = async (req, res) => {
    const newData = req.body;
    try {
        const result = await belanja_1.default.createDataBelanja(newData);
        res.status(200).json({
            message: "data berhasil di tambahkan",
            data: result
        });
    }
    catch {
        res.status(500).json({
            message: "data gagal di tambahkan"
        });
    }
};
const updateBelanja = async (req, res) => {
    const { id } = req.params;
    const { nama, harga, jumlah } = req.body;
    try {
        const idBelanja = Number(id);
        const newData = { nama, harga, jumlah };
        const result = await belanja_1.default.updateDataBelanja(idBelanja, newData);
        res.status(200).json({
            message: "data berhasil di ubah",
            data: result
        });
    }
    catch {
        res.status(400).json({
            message: "data gagal di ubah",
        });
    }
};
const deleteBelanja = async (req, res) => {
    const { id } = req.params;
    try {
        const idBelanja = Number(id);
        const result = await belanja_1.default.deleteDataBelanja(idBelanja);
        res.status(200).json({
            message: "data berhasil di hapus",
            data: result
        });
    }
    catch {
        res.status(400).json({
            message: "data gagal di hapus"
        });
    }
};
exports.default = { getAllBelanja, createBelanja, updateBelanja, deleteBelanja };
