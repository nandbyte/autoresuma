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
const experience_1 = __importDefault(require("../models/experience"));
const uuid_1 = require("uuid");
class ExperienceController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = uuid_1.v4();
                const record = yield experience_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({ status: 200, msg: "OK", route: "/v1/experience", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, router: "/v1/experience" });
            }
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const record = yield experience_1.default.findAll({ where: {
                        userId: uid
                    } });
                return res.json({ status: 200, msg: "OK", route: "/v1/experience", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, router: "/v1/experience" });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const expId = req.params.experinceId;
                const record = yield experience_1.default.findOne({ where: {
                        id: expId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/experience/:userId/:experinceId" });
                }
                return res.json({ status: 200, msg: "OK", record, route: "/v1/experience/:userId/:experinceId" });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/experience/:userId/:experinceId" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const expId = req.params.experinceId;
                const record = yield experience_1.default.findOne({ where: {
                        id: expId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/experience/:userId/:experinceId" });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({ status: 200, msg: "OK", route: "/v1/experience/:userId/:experinceId", newRec });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/experience/:userId/:experinceId" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const expId = req.params.experienceId;
                const record = yield experience_1.default.findOne({ where: {
                        id: expId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/experience/:userId/:experinceId" });
                }
                yield record.destroy();
                return res.json({ status: 200, msg: "OK", route: "/v1/experience/:userId/:experinceId" });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/experience/:userId/:experinceId" });
            }
        });
    }
}
exports.default = new ExperienceController();
