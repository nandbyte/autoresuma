import { CommonControllerConfig } from "../common/common.controllers.config";
import Skill from "../models/skill";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

class SkillController extends CommonControllerConfig {
    create = async (req: Request, res: Response) => {
        const id = uuidv4();
        try {
            const record = await Skill.create({ ...req.body, id });
            return res.json({
                status: 201,
                msg: "OK",
                route: "/v1/skill",
                record,
            });
        } catch (e) {
            return res.json({
                status: 500,
                msg: e.message,
                route: "/v1/skill",
            });
        }
    };

    getAll = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId;
            const records = await Skill.findAll({
                where: {
                    userId: uid,
                },
            });
            return res.json({
                status: 200,
                msg: "OK",
                route: "/v1/skill/:userId",
                records,
            });
        } catch (e) {
            return res.json({
                status: 500,
                msg: e.message,
                route: "/v1/skill/:userId",
            });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId;
            const skillId = req.params.skillId;
            const record = await Skill.findOne({
                where: {
                    id: skillId,
                    userId: uid,
                },
            });

            if (!record) {
                return res.json({
                    status: 204,
                    msg: "NO CONTENT",
                    route: "/v1/skill/:userId/:skillId",
                });
            }

            return res.json({
                status: 200,
                msg: "OK",
                route: "/v1/skill/:userId/:skillId",
            });
        } catch (e) {
            return res.json({
                status: 500,
                msg: e.message,
                route: "/v1/skill/:userId/:skillId",
            });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId;
            const skillId = req.params.skillId;
            const record = await Skill.findOne({
                where: {
                    id: skillId,
                    userId: uid,
                },
            });

            if (!record) {
                return res.json({
                    status: 204,
                    msg: "NO CONTENT",
                    route: "/v1/skill/:userId/:skillId",
                });
            }
            const newRec = await record.update({ ...req.body });
            return res.json({
                status: 200,
                msg: "OK",
                route: "/v1/skill/:userId/:skillId",
                newRec,
            });
        } catch (e) {
            return res.json({
                status: 500,
                msg: e.message,
                route: "/v1/skill/:userId/:skillId",
            });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId;
            const skillId = req.params.skillId;

            const record = await Skill.findOne({
                where: {
                    id: skillId,
                    userId: uid,
                },
            });
            if (!record) {
                return res.json({
                    status: 204,
                    msg: "NO CONTENT",
                    route: "/v1/skill/:userId/:skillId",
                });
            }
            await record.destroy();
            return res.json({
                status: 200,
                msg: "OK",
                route: "/v1/skill/:userId/:skillId",
            });
        } catch (e) {
            return res.json({
                status: 500,
                msg: e.message,
                route: "/v1/skill/:userId/:skillId",
            });
        }
    };
}

export default new SkillController();
