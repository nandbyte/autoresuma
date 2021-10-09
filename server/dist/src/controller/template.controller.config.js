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
const template_1 = __importDefault(require("../models/template"));
const uuid_1 = require("uuid");
class TemplateController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            try {
                const record = yield template_1.default.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({ status: 201, msg: "OK", route: "/template", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/template" });
            }
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const records = yield template_1.default.findAll({ where: {} });
                return res.json({ status: 200, msg: "OK", route: "/template", records });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/template" });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const templateId = req.params.templateId;
            try {
                const record = yield template_1.default.findOne({ where: {
                        id: templateId,
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/template/:templateId" });
                }
                return res.json({ status: 200, msg: "OK", route: "/template", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/template" });
            }
        });
        this.getByUserId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const templateId = req.params.templateId;
                const userId = req.params.userId;
                const record = yield template_1.default.findOne({ where: {
                        id: templateId,
                        userId: userId
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/template/:templateId/:userId" });
                }
                return res.json({ status: 200, msg: "OK", route: "/template/:templateId/:userId", record });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/template/:templateId/:userId" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const templateId = req.params.templateId;
            const userId = req.params.userId;
            try {
                const record = yield template_1.default.findOne({ where: {
                        id: templateId,
                        userId: userId
                    } });
                if (!record) {
                    return res.json({ status: 204, msg: "NO CONTENT", route: "/v1/template/:templateId/:userId" });
                }
                const newRec = yield record.update(Object.assign({}, req.body));
                return res.json({ status: 200, msg: "OK", route: "/v1/template/:templateId/:userId", newRec });
            }
            catch (e) {
                return res.json({ status: 500, msg: e.message, route: "/v1/template/:templateId/:userId" });
            }
        });
        /*delete = async(req: Request, res: Response)=>{
            try{
                const templateId = req.params.templateId;
                //const userId = req.params.userId;
    
                const record = await Template.findOne({where:{
                    id : templateId,
                    //userId: userId
                }});
                /*if(!record){
                    res.json({msg:"No record with these credentials exist."});
                }
                await record.destroy();
                return res.json({msg:"Record deleted successfully"});
            }
            catch(e){
                return res.json({msg:"Delete failed.",status:500,route:"/template/:userId/:templateId"});
            }
        }*/
    }
}
exports.default = new TemplateController();
