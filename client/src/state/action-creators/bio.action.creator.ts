import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Bio } from "../types";

export const fetchBio = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_BIO });

        try {
            const { data } = await axios.get("http://localhost:3000/");

            const fetchedBio: Bio = data;

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

export const saveBio = (newBio: Bio) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SAVE_CURRENT_BIO,
            payload: newBio,
        });
        try {
            const { status } = await axios.post(
                "http://localhost:3000/",
                newBio
            );

            if (status === 200) {
                dispatch({
                    type: ActionType.SAVE_BIO_SUCCESS,
                    payload: newBio,
                });
                dispatch({ type: ActionType.UPDATE_BIO_SUCCESS });
            }
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
