import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Bio } from "../types";

const api: string = "http://localhost:3000/v1/bio/";

export const fetchBio = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_BIO });

        try {
            const { data } = await axios.get(api + userId);

            console.log(data);

            const fetchedBio: Bio = data.record[0];

            dispatch({
                type: ActionType.FETCH_BIO_SUCCESS,
                payload: fetchedBio,
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.BIO_ERROR,
                payload: error.message,
            });
        }
    };
};

export const saveBio = (newBio: Bio, userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SAVE_CURRENT_BIO,
            payload: newBio,
        });
        try {
            await axios.put(api + userId + "/", newBio);

            dispatch({
                type: ActionType.SAVE_BIO_SUCCESS,
                payload: newBio,
            });
            dispatch({ type: ActionType.UPDATE_BIO_SUCCESS });
        } catch (error: any) {
            dispatch({
                type: ActionType.BIO_ERROR,
                payload: error.message,
            });
        }
    };
};

export const createBio = (newBio: Bio, userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SAVE_CURRENT_BIO,
            payload: newBio,
        });
        try {
            await axios.post(api + userId + "/", newBio);

            dispatch({
                type: ActionType.SAVE_BIO_SUCCESS,
                payload: newBio,
            });
            dispatch({ type: ActionType.UPDATE_BIO_SUCCESS });
        } catch (error: any) {
            dispatch({
                type: ActionType.BIO_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToBioForm = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_BIO });
    };
};

export const switchToBioView = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_BIO_SUCCESS });
    };
};
