import BioAction from "./bio.action";
import EducationAction from "./education.action";
import ExperienceAction from "./experience.action";
import ProjectAction from "./project.action";
import SkillAction from "./skill.action";
import UserAction from "./user.action";

export type Action =
    | BioAction
    | EducationAction
    | ProjectAction
    | SkillAction
    | ExperienceAction
    | UserAction;
