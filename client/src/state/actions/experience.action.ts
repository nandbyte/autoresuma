import { ActionType } from "../action-types";
import { Experience } from "../types";

interface FetchExperiencesAction {
    type: ActionType.FETCH_EXPERIENCES;
}

interface FetchExperiencesSuccessAction {
    type: ActionType.FETCH_EXPERIENCES_SUCCESS;
    payload: {
        experiences: Experience[];
    };
}

interface FormUpdateExperienceAction {
    type: ActionType.FORM_UPDATE_EXPERIENCE;
    payload: {
        formIndex: number;
    };
}

interface FormUpdateExperienceSuccessAction {
    type: ActionType.FORM_UPDATE_EXPERIENCE_SUCCESS;
    payload: {
        formIndex: number;
    };
}

interface UpdateExperiencesAction {
    type: ActionType.UPDATE_EXPERIENCE;
    payload: {
        updateIndex: number;
    };
}

interface UpdateExperiencesSuccessAction {
    type: ActionType.UPDATE_EXPERIENCE_SUCCESS;
    payload: {
        updateIndex: number;
        updatedExperience: Experience;
    };
}

interface AddExperienceAction {
    type: ActionType.ADD_EXPERIENCE;
    payload: {
        newIndex: number;
    };
}
interface CancelAddExperienceAction {
    type: ActionType.CANCEL_ADD_EXPERIENCE;
}

interface AddExperienceSuccessAction {
    type: ActionType.ADD_EXPERIENCE_SUCCESS;
    payload: {
        newIndex: number;
        newExperience: Experience;
    };
}

interface SwitchAddExperienceAction {
    type: ActionType.SWITCH_ADD_EXPERIENCE;
}

interface SaveNewExperienceAction {
    type: ActionType.SAVE_NEW_EXPERIENCE;
    payload: {
        newIndex: number;
        newExperience: Experience;
    };
}

interface SaveNewExperienceSuccessAction {
    type: ActionType.SAVE_NEW_EXPERIENCE_SUCCESS;
    payload: {
        newIndex: number;
        newExperience: Experience;
    };
}

interface DeleteExperienceAction {
    type: ActionType.DELETE_EXPERIENCE;
    payload: {
        deleteIndex: number;
    };
}

interface DeleteExperienceSuccessAction {
    type: ActionType.DELETE_EXPERIENCE_SUCCESS;
    payload: {
        deleteIndex: number;
    };
}

interface ExperienceErrorAction {
    type: ActionType.EXPERIENCE_ERROR;
    payload: {
        error: string;
    };
}

type ExperienceAction =
    | FetchExperiencesAction
    | FetchExperiencesSuccessAction
    | FormUpdateExperienceAction
    | FormUpdateExperienceSuccessAction
    | UpdateExperiencesAction
    | UpdateExperiencesSuccessAction
    | AddExperienceAction
    | CancelAddExperienceAction
    | AddExperienceSuccessAction
    | SwitchAddExperienceAction
    | SaveNewExperienceAction
    | SaveNewExperienceSuccessAction
    | DeleteExperienceAction
    | DeleteExperienceSuccessAction
    | ExperienceErrorAction;

export default ExperienceAction;
