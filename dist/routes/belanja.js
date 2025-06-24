"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const belanja_1 = __importDefault(require("../controllers/belanja"));
const router = (0, express_1.default)();
router.get("/", belanja_1.default.getAllBelanja);
router.post("/", belanja_1.default.createBelanja);
router.patch("/:id", belanja_1.default.updateBelanja);
router.delete("/:id", belanja_1.default.deleteBelanja);
exports.default = router;
