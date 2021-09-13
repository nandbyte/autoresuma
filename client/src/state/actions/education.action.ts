import { ActionType } from "../action-types";
import { Education } from "../types";

interface FetchEducationsAction {
    type: ActionType.FETCH_EDUCATIONS;
}

interface FetchEducationsSuccessAction {
    type: ActionType.FETCH_EDUCATIONS_SUCCESS;
    payload: Education[];
}

interface UpdateEducationAction {
    type: ActionType.UPDATE_EDUCATION;
    payload: number;
}

interface UpdateEducationSuccessAction {
    type: ActionType.UPDATE_EDUCATION_SUCCESS;
    payload: number;
}
interface SaveEducationAction {
    type: ActionType.SAVE_EDUCATION;
}

interface SaveEducationSuccessAction {
    type: ActionType.SAVE_EDUCATION_SUCCESS;
    payload: {
        targetIndex: number;
        updatedEducation: Education;
    };
}

interface AddEducationAction {
    type: ActionType.ADD_EDUCATION;
    payload: Education;
}

interface EducationErrorAction {
    type: ActionType.EDUCATION_ERROR;
    payload: string;
}

type EducationAction =
    | FetchEducationsAction
    | FetchEducationsSuccessAction
    | UpdateEducationAction
    | UpdateEducationSuccessAction
    | SaveEducationAction
    | SaveEducationSuccessAction
    | AddEducationAction
    | EducationErrorAction;

export default EducationAction;
