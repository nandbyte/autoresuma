import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Education } from "../types";

const api: string = "http://localhost:3000/v1/";

export const fetchEducations = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_EDUCATIONS });

        try {
            const { data } = await axios.get(api + "education/" + userId);

            const educations: Education[] = data;

            dispatch({
                type: ActionType.FETCH_EDUCATIONS_SUCCESS,
                payload: {
                    educations: educations,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
        }
    };
};

// TODO: Update
export const addEducation = (newEducation: Education, userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_EDUCATION,
            payload: {
                newIndex: newEducation.serial,
                newEducation: newEducation,
            },
        });

        try {
            await axios.post(api + "education/" + userId, newEducation);

            dispatch({
                type: ActionType.ADD_EDUCATION_SUCCESS,
                payload: {
                    newIndex: newEducation.serial,
                    newEducation: newEducation,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToAddEducationMode = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SWITCH_ADD_EDUCATION,
        });
    };
};

export const cancelAddEducation = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CANCEL_ADD_EDUCATION,
        });
    };
};

// Fix this to send all educations
export const updateEducations = (
    currentEducations: Education[],
    updatedEducation: Education,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_EDUCATIONS,
        });

        const updatedEducations: Education[] = Object.assign(
            [],
            currentEducations,
            { [updatedEducation.serial]: updatedEducation }
        );

        try {
            const { status } = await axios.put(
                api + "education/" + userId,
                updatedEducations
            );

            if (status === 200) {
                dispatch({
                    type: ActionType.UPDATE_EDUCATIONS_SUCCESS,
                    payload: {
                        updatedEducations: updatedEducations,
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

// TODO: Fix userId
export const deleteEducation = (
    currentEducations: Education[],
    deletedEducation: Education,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_EDUCATIONS,
        });

        try {
            await axios.delete(
                api + "education/" + userId + "/" + deletedEducation.id
            );

            let updatedEducations = currentEducations.filter(
                (value) => value !== deletedEducation
            );

            updatedEducations.forEach((value, index) => {
                value.serial = index;
            });

            await axios.put(api + "education/" + userId, updateEducations);

            dispatch({
                type: ActionType.UPDATE_EDUCATIONS_SUCCESS,
                payload: {
                    updatedEducations: updatedEducations,
                },
            });
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
        dispatch({
            type: ActionType.FORM_UPDATE_EDUCATION,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const switchToEducationView = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_EDUCATION_SUCCESS,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const swapEducation = (
    currentEducations: Education[],
    firstEducation: Education,
    secondEducation: Education,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_EDUCATIONS,
        });

        const firstIndex = firstEducation.serial;
        const secondIndex = secondEducation.serial;

        firstEducation = { ...firstEducation, serial: secondIndex };
        secondEducation = { ...secondEducation, serial: firstIndex };

        const updatedEducations: Education[] = Object.assign(
            [],
            currentEducations,
            {
                [firstIndex]: secondEducation,
                [secondIndex]: firstEducation,
            }
        );

        try {
            const { status } = await axios.put(
                api + "education/" + userId,
                updatedEducations
            );

            if (status === 200) {
                dispatch({
                    type: ActionType.UPDATE_EDUCATIONS_SUCCESS,
                    payload: {
                        updatedEducations: updatedEducations,
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
