"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const belanja_1 = __importDefault(require("./routes/belanja"));
// import accessValidation from "./middleware/access"
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/auth", users_1.default);
app.use("/api", belanja_1.default);
app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`);
});
