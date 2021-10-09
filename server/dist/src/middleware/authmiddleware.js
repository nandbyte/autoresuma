"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
// auth middleware added
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    console.log(req.headers.authorization);
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, "secret");
            if (decoded.id !== req.params.userId) {
                return res.json({ status: 500, msg: "Unauthorized access will not be granted." });
            }
            req.user = yield user_1.default.findOne({ where: {
                    id: decoded.id
                } });
            next();
        }
        catch (error) {
            return res.json({
                status: 401,
                msg: "Authorization failed",
                error_msg: error.message
            });
        }
    }
    if (!token) {
        return res.json({
            status: 401,
            msg: "NO TOKEN",
        });
    }
});
exports.default = protect;
