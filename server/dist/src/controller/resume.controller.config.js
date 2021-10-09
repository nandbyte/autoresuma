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
const resume_1 = __importDefault(require("../models/resume"));
const uuid_1 = require("uuid");
class ResumeController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = uuid_1.v4();
                const record = yield resume_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({ status: 201, msg: "OK", route: "/v1/resume", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/resume" });
            }
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const record = yield resume_1.default.findAll({ where: {
                        userId: uid
                    } });
                return res.json({ status: 200, msg: "OK", route: "/v1/resume/:userId", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/resume/:userId" });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const resumeId = req.params.resumeId;
                const record = yield resume_1.default.findOne({ where: {
                        id: resumeId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/resume/:userId/:resumeId" });
                }
                return res.json({ status: 200, msg: "OK", route: "/v1/resume/:userId/:resumeId", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/resume/:userId/:resumeId" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const resumeId = req.params.resumeId;
                const record = yield resume_1.default.findOne({ where: {
                        id: resumeId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/resume/:userId/:resumeId" });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({ status: 200, msg: "OK", route: "/v1/resume/:userId/:resumeId", newRec });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/resume/:userId/:resumeId" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const resumeId = req.params.resumeId;
                const record = yield resume_1.default.findOne({ where: {
                        id: resumeId,
                        userId: uid
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/resume/:userId/:resumeId" });
                }
                yield record.destroy();
                return res.json({ status: 200, msg: "OK", route: "/v1/resume/:userId/:resumeId" });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/resume/:userId/:resumeId" });
            }
        });
    }
}
exports.default = new ResumeController();
