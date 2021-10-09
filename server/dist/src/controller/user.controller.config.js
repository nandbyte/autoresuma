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
const common_controllers_config_1 = require("../common/common.controllers.config");
const user_1 = __importDefault(require("../models/user"));
const uuid_1 = require("uuid");
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const bio_1 = __importDefault(require("../models/bio"));
class UserController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.authUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const password = req.body.password;
                const record = yield user_1.default.findOne({ where: { email: email, password: password } });
                if (!record) {
                    return res.json({ status: 204, msg: "NOT FOUND", route: "/profile/login" });
                }
                else {
                    const data = {
                        id: record.id,
                        email: record.email,
                        token: generateToken_1.default(record.id)
                    };
                    return res.json({ status: 200, msg: "ok", route: "/v1/profile/login", data });
                }
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/profile/:userId" });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = uuid_1.v4();
                const bioId = uuid_1.v4();
                const duplicateErrs = yield user_1.default.findOne({ where: { email: req.body.email } });
                if (duplicateErrs) {
                    return res.json({ status: 400, msg: "mail duplicate error" });
                }
                const record = yield user_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                delete req.body.password;
                req.body.userId = id;
                const bioRecord = yield bio_1.default.create(Object.assign(Object.assign({}, req.body), { id: bioId }));
                return res.json({ status: 201, msg: "OK", route: "/v1/profile/:userId", record, bioRecord });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/profile/:userId" });
            }
        });
        this.getAllUsers = (res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield user_1.default.findAll({ where: {} });
                if (!record) {
                    return res.json({ status: 204, msg: "NOT FOUND", route: "/profile" });
                }
                return res.json({ status: 200, msg: "OK", route: "/v1/profile", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, router: "/v1/profile" });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const record = yield user_1.default.findOne({ where: { id: uid } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/profile/:userId" });
                }
                const data = {
                    id: record.id,
                    firstName: record.firstName,
                    lastName: record.lastName,
                    email: record.email
                };
                return res.json({ status: 200, msg: "OK", route: "/v1/profile/:userId", data });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/profile/:userId" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const record = yield user_1.default.findOne({ where: { id: uid } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/profile/:userId" });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({ status: 200, msg: "OK", route: "/v1/profile/:userId", record: newRec });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/profile/:userId" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const record = yield user_1.default.findOne({ where: { id: uid } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/profile/:userId" });
                }
                yield record.destroy();
                return res.json({ staus: 200, msg: "OK", route: "/v1/profile/:userId" });
            }
            catch (e) {
                return res.json({ status: 500, error: e.message, route: "/v1/profile/:userId" });
            }
        });
    }
}
exports.default = new UserController();
