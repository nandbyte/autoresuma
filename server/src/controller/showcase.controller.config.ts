
import { CommonControllerConfig } from "../common/common.controllers.config";
import Education from "../models/education";
import Bio from "../models/bio";
import Experience from "../models/experience";
import Project from "../models/project";
import Resume from "../models/resume";
import Skill from "../models/skill";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

class ShowcaseController extends CommonControllerConfig {

    getAll = async (req: Request, res: Response) => {
        try {
            const uid = req.params.userId;
            const recordBio =await Bio.findAll({where:{userId:uid}});
	    const recordEducation = await Education.findAll({ where: { userId: uid } });
	    const recordExperience = await Experience.findAll({where:{userId:uid}});

	    const recordProject = await Project.findAll({where:{userId:uid}});
	    const recordResume = await Resume.findAll({where:{userId:uid}});
	    const recordSkill = await Skill.findAll({where:{userId:uid}});



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
        } catch (error: any) {
            return res.json({
                status: 500,
                msg: error.message,
                router: "/v1/showcase/:userId",
            });
        }
    };

}

export default new ShowcaseController();
