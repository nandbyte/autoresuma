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
const bio_1 = __importDefault(require("../models/bio"));
const uuid_1 = require("uuid");
class BioController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const bioId = req.params.bioId;
                const record = yield bio_1.default.findOne({
                    where: {
                        id: bioId,
                        userId: uid,
                    },
                });
                if (!record) {
                    return res.json({
                        status: 204,
                        msg: "NO CONTENT",
                        route: "/v1/bio/:userId/:bioId",
                    });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({
                    status: 200,
                    msg: "OK",
                    route: "/v1/bio/:userId/:bioId",
                    newRec,
                });
            }
            catch (error) {
                return res.json({
                    status: 500,
                    msg: error.message,
                    source: "/v1/bio/:userId/:bioId",
                });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const bioId = req.params.bioId;
                const record = yield bio_1.default.findOne({
                    where: {
                        id: bioId,
                        userId: uid,
                    },
                });
                if (!record) {
                    return res.json({
                        status: 204,
                        msg: "NO CONTENT",
                        route: "/v1/bio/:userId/:bioId",
                    });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({
                    status: 200,
                    msg: "OK",
                    route: "/v1/bio/:userId/:bioId",
                    newRec,
                });
            }
            catch (error) {
                return res.json({
                    status: 500,
                    msg: error.message,
                    route: "/v1/bio/:userId/:bioId",
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            try {
                const record = yield bio_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({ status: 201, msg: "OK", route: "/bio", record });
            }
            catch (error) {
                return res.json({
                    msg: error.message,
                    status: 500,
                    route: "/v1/bio",
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = req.params.userId;
            try {
                const record = yield bio_1.default.findAll({
                    where: {
                        userId: uid,
                    },
                });
                return res.json({
                    status: 200,
                    msg: "OK",
                    router: "/v1/bio",
                    record,
                });
            }
            catch (error) {
                return res.json({
                    status: 500,
                    msg: error.message,
                    router: "/v1/bio",
                });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = req.params.userId;
            const bioId = req.params.bioId;
            try {
                const record = yield bio_1.default.findOne({
                    where: {
                        id: bioId,
                        userId: uid,
                    },
                });
                if (!record) {
                    return res.json({
                        status: 204,
                        msg: "NO CONTENT",
                        route: "/v1/bio/:userId/:bioId",
                    });
                }
                return res.json({
                    status: 200,
                    msg: "OK",
                    route: "/v1/bio/:userId/:bioId",
                    record,
                });
            }
            catch (error) {
                return res.json({
                    status: 500,
                    msg: error.message,
                    route: "v1/bio/:userId/:bioId",
                });
            }
        });
    }
}
exports.default = new BioController();
