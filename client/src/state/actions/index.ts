import { ActionType } from "../action-types";
import { Bio } from "../types";

interface FetchBioAction {
    type: ActionType.FETCH_BIO;
}

interface FetchBioSuccessAction {
    type: ActionType.FETCH_BIO_SUCCESS;
    payload: Bio;
}

interface SaveBioAction {
    type: ActionType.SAVE_BIO;
}

interface SaveBioSuccessAction {
    type: ActionType.SAVE_BIO_SUCCESS;
    payload: Bio;
}

interface SaveCurrentBioAction {
    type: ActionType.SAVE_CURRENT_BIO;
    payload: Bio;
}

interface BioErrorAction {
    type: ActionType.BIO_ERROR;
    payload: string;
}

interface UpdateBioAction {
    type: ActionType.UPDATE_BIO;
}

interface UpdateBioSuccessAction {
    type: ActionType.UPDATE_BIO_SUCCESS;
}

export type Action =
    | FetchBioAction
    | FetchBioSuccessAction
    | SaveBioAction
    | SaveBioSuccessAction
    | SaveCurrentBioAction
    | UpdateBioAction
    | UpdateBioSuccessAction
    | BioErrorAction;
