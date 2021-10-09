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
const education_1 = __importDefault(require("../models/education"));
const bio_1 = __importDefault(require("../models/bio"));
const experience_1 = __importDefault(require("../models/experience"));
const project_1 = __importDefault(require("../models/project"));
const resume_1 = __importDefault(require("../models/resume"));
const skill_1 = __importDefault(require("../models/skill"));
class ShowcaseController extends common_controllers_config_1.CommonControllerConfig {
    constructor() {
        super(...arguments);
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.userId;
                const recordBio = yield bio_1.default.findAll({ where: { userId: uid } });
                const recordEducation = yield education_1.default.findAll({ where: { userId: uid } });
                const recordExperience = yield experience_1.default.findAll({ where: { userId: uid } });
                const recordProject = yield project_1.default.findAll({ where: { userId: uid } });
                const recordResume = yield resume_1.default.findAll({ where: { userId: uid } });
                const recordSkill = yield skill_1.default.findAll({ where: { userId: uid } });
                return res.json({
                    status: 200,
                    msg: "OK",
                    route: "/v1/:userId",
                    recordBio,
                    recordEducation,
                    recordExperience,
                    recordProject,
                    recordResume,
                    recordSkill
                });
            }
            catch (error) {
                return res.json({
                    status: 500,
                    msg: error.message,
                    router: "/v1/showcase/:userId",
                });
            }
        });
    }
}
exports.default = new ShowcaseController();
