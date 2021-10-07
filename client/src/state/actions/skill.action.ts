import { ActionType } from "../action-types";
import { Skill } from "../types";

interface FetchSkillsAction {
    type: ActionType.FETCH_SKILLS;
}

interface FetchSkillsSuccessAction {
    type: ActionType.FETCH_SKILLS_SUCCESS;
    payload: {
        skills: Skill[];
    };
}

interface FormUpdateSkillAction {
    type: ActionType.FORM_UPDATE_SKILL;
    payload: {
        formIndex: number;
    };
}

interface FormUpdateSkillSuccessAction {
    type: ActionType.FORM_UPDATE_SKILL_SUCCESS;
    payload: {
        formIndex: number;
    };
}

interface UpdateSkillsAction {
    type: ActionType.UPDATE_SKILL;
    payload: {
        updateIndex: number;
    };
}

interface UpdateSkillsSuccessAction {
    type: ActionType.UPDATE_SKILL_SUCCESS;
    payload: {
        updateIndex: number;
        updatedSkill: Skill;
    };
}

interface AddSkillAction {
    type: ActionType.ADD_SKILL;
    payload: {
        newIndex: number;
    };
}
interface CancelAddSkillAction {
    type: ActionType.CANCEL_ADD_SKILL;
}

interface AddSkillSuccessAction {
    type: ActionType.ADD_SKILL_SUCCESS;
    payload: {
        newIndex: number;
        newSkill: Skill;
    };
}

interface SwitchAddSkillAction {
    type: ActionType.SWITCH_ADD_SKILL;
}

interface SaveNewSkillAction {
    type: ActionType.SAVE_NEW_SKILL;
    payload: {
        newIndex: number;
        newSkill: Skill;
    };
}

interface SaveNewSkillSuccessAction {
    type: ActionType.SAVE_NEW_SKILL_SUCCESS;
    payload: {
        newIndex: number;
        newSkill: Skill;
    };
}

interface DeleteSkillAction {
    type: ActionType.DELETE_SKILL;
    payload: {
        deleteIndex: number;
    };
}

interface DeleteSkillSuccessAction {
    type: ActionType.DELETE_SKILL_SUCCESS;
    payload: {
        deleteIndex: number;
    };
}

interface SkillErrorAction {
    type: ActionType.SKILL_ERROR;
    payload: {
        error: string;
    };
}

type SkillAction =
    | FetchSkillsAction
    | FetchSkillsSuccessAction
    | FormUpdateSkillAction
    | FormUpdateSkillSuccessAction
    | UpdateSkillsAction
    | UpdateSkillsSuccessAction
    | AddSkillAction
    | CancelAddSkillAction
    | AddSkillSuccessAction
    | SwitchAddSkillAction
    | SaveNewSkillAction
    | SaveNewSkillSuccessAction
    | DeleteSkillAction
    | DeleteSkillSuccessAction
    | SkillErrorAction;

export default SkillAction;
