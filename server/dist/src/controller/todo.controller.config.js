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
exports.TodoController = void 0;
const common_controllers_config_1 = require("../common/common.controllers.config");
const todolist_1 = __importDefault(require("../models/todolist"));
const uuid_1 = require("uuid");
//import bodyParser from "body-parser";
//const bodyparser = require("body-parser");
class TodoController extends common_controllers_config_1.CommonControllerConfig {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            try {
                const record = yield todolist_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({ record, msg: "Successfully create todo" });
            }
            catch (e) {
                return res.json({ msg: "fail to create", status: 500, route: "/create/:userIdi/posts/:id" });
            }
        });
    }
    readPagination(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit;
                const offset = (_b = req.query) === null || _b === void 0 ? void 0 : _b.offset;
                //need to add userid
                const records = yield todolist_1.default.findAll({ where: {}, limit, offset });
                return res.json(records);
            }
            catch (e) {
                return res.json({ msg: 'failed to send', status: 500, route: '/read/posts' });
            }
        });
    }
    readByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { userId } = req.params;
                const record = yield todolist_1.default.findOne({ where: { id, userId } });
                if (!record) {
                    return res.json({ msg: "failed to send" });
                }
                return res.json(record);
            }
            catch (e) {
                return res.json({ msg: "fail to read", status: 500, router: '/read/:userId/posts/:id' });
            }
        });
    }
    getUserPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const record = yield todolist_1.default.findAll({ where: { userId } });
                return res.json({ record, msg: " successfully got user id's post " });
            }
            catch (e) {
                return res.json({ msg: "failed to get this user ids all posts", status: 500, router: "/read/:userId/posts" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { userId } = req.params;
                const record = yield todolist_1.default.findOne({ where: { id, userId } });
                if (!record) {
                    return res.json({ msg: 'Can not find existing record' });
                }
                const updateRecord = yield record.update({
                    completed: !record.getDataValue('completed'),
                });
                return res.json({ record: updateRecord });
            }
            catch (e) {
                return res.json({ msg: 'fail to read', status: 500, route: '/update/:userId/posts/:id' });
            }
        });
    }
}
exports.TodoController = TodoController;
