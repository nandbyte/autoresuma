import { ActionType } from "../action-types";
import { Education } from "../types";

interface FetchEducationsAction {
    type: ActionType.FETCH_EDUCATIONS;
}

interface FetchEducationsSuccessAction {
    type: ActionType.FETCH_EDUCATIONS_SUCCESS;
    payload: {
        educations: Education[];
    };
}

interface FormUpdateEducationAction {
    type: ActionType.FORM_UPDATE_EDUCATION;
    payload: {
        formIndex: number;
    };
}

interface FormUpdateEducationSuccessAction {
    type: ActionType.FORM_UPDATE_EDUCATION_SUCCESS;
    payload: {
        formIndex: number;
    };
}

interface UpdateEducationsAction {
    type: ActionType.UPDATE_EDUCATION;
    payload: {
        updateIndex: number;
    };
}

interface UpdateEducationsSuccessAction {
    type: ActionType.UPDATE_EDUCATION_SUCCESS;
    payload: {
        updateIndex: number;
        updatedEducation: Education;
    };
}

interface AddEducationAction {
    type: ActionType.ADD_EDUCATION;
    payload: {
        newIndex: number;
    };
}
interface CancelAddEducationAction {
    type: ActionType.CANCEL_ADD_EDUCATION;
}

interface AddEducationSuccessAction {
    type: ActionType.ADD_EDUCATION_SUCCESS;
    payload: {
        newIndex: number;
        newEducation: Education;
    };
}

interface SwitchAddEducationAction {
    type: ActionType.SWITCH_ADD_EDUCATION;
}

interface SaveNewEducationAction {
    type: ActionType.SAVE_NEW_EDUCATION;
    payload: {
        newIndex: number;
        newEducation: Education;
    };
}

interface SaveNewEducationSuccessAction {
    type: ActionType.SAVE_NEW_EDUCATION_SUCCESS;
    payload: {
        newIndex: number;
        newEducation: Education;
    };
}

interface DeleteEducationAction {
    type: ActionType.DELETE_EDUCATION;
    payload: {
        deleteIndex: number;
    };
}

interface DeleteEducationSuccessAction {
    type: ActionType.DELETE_EDUCATION_SUCCESS;
    payload: {
        deleteIndex: number;
    };
}

interface EducationErrorAction {
    type: ActionType.EDUCATION_ERROR;
    payload: {
        error: string;
    };
}

type EducationAction =
    | FetchEducationsAction
    | FetchEducationsSuccessAction
    | FormUpdateEducationAction
    | FormUpdateEducationSuccessAction
    | UpdateEducationsAction
    | UpdateEducationsSuccessAction
    | AddEducationAction
    | CancelAddEducationAction
    | AddEducationSuccessAction
    | SwitchAddEducationAction
    | SaveNewEducationAction
    | SaveNewEducationSuccessAction
    | DeleteEducationAction
    | DeleteEducationSuccessAction
    | EducationErrorAction;

export default EducationAction;
