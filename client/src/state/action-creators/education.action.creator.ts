import { store } from "./../store";
import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Education } from "../types";

export const fetchEducations = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_EDUCATIONS });

        try {
            const { data } = await axios.get(
                "http://localhost:3030/profile/education"
            );

            const educations: Education[] = data;

            dispatch({
                type: ActionType.FETCH_EDUCATIONS_SUCCESS,
                payload: educations,
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
        }
    };
};

export const addEducation = (newEducation: Education) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.ADD_EDUCATION, payload: newEducation });

        try {
            const { data } = await axios.post(
                "http://localhost:3030/profile/education"
            );
            // TODO: Fix this function
            const educations: Education[] = data;

            dispatch({
                type: ActionType.FETCH_EDUCATIONS_SUCCESS,
                payload: educations,
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
        }
    };
};

export const saveEducation = (newEducation: Education) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.SAVE_EDUCATION });
        // TODO: Fix the dispatches after reducer SAVE_EDUCATION is fixed
        try {
            const { status } = await axios.post(
                "http://localhost:3030/profile/education",
                newEducation
            );

            if (status === 200) {
                dispatch({
                    type: ActionType.SAVE_EDUCATION_SUCCESS,
                    payload: {
                        updatedEducation: newEducation,
                        targetIndex: newEducation.serial,
                    },
                });
            }
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToEducationForm = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_EDUCATION, payload: index });
    };
};

export const switchToEducationView = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_EDUCATION_SUCCESS, payload: index });
    };
};

export const swapEducation = (
    firstEducation: Education,
    secondEducation: Education
) => {
    return async (dispatch: Dispatch<Action>) => {
        const firstIndex = firstEducation.serial;
        const secondIndex = secondEducation.serial;

        dispatch({ type: ActionType.UPDATE_EDUCATION, payload: firstIndex });
        dispatch({ type: ActionType.UPDATE_EDUCATION, payload: secondIndex });

        firstEducation = { ...firstEducation, serial: secondIndex };
        secondEducation = { ...secondEducation, serial: firstIndex };

        saveEducation(firstEducation);
        saveEducation(secondEducation);

        dispatch({
            type: ActionType.UPDATE_EDUCATION_SUCCESS,
            payload: firstIndex,
        });
        dispatch({
            type: ActionType.UPDATE_EDUCATION_SUCCESS,
            payload: secondIndex,
        });
    };
};
