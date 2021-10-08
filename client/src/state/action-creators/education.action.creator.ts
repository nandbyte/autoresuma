import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Education } from "../types";

const api: string = "http://localhost:3000/v1/";

export const fetchEducations = (userId: string) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_EDUCATIONS });

        try {


            const { data } = await axios.get(api + "education/" + userId, config);

            console.log(data);

            const educations: Education[] = data.record;

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
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_EDUCATION,
            payload: {
                newIndex: newEducation.serial,
                newEducation: newEducation,
            },
        });

        try {
            const { data } = await axios.post(
                api + "education/" + userId,
                newEducation,
                config,
            );

            console.log(newEducation);
            console.log(data);

            dispatch({
                type: ActionType.ADD_EDUCATION_SUCCESS,
                payload: {
                    newIndex: newEducation.serial,
                    newEducation: data.record,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EDUCATION_ERROR,
                payload: error.message,
            });
            console.log(error);
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
export const updateEducation = (
    updateIndex: number,
    updatedEducation: Education,
    userId: string
) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_EDUCATION,
            payload: {
                updateIndex: updateIndex,
            },
        });

        try {
            await axios.put(
                api + "education/" + userId + "/" + updatedEducation.id,
                updatedEducation,
                config
            );

            dispatch({
                type: ActionType.UPDATE_EDUCATION_SUCCESS,
                payload: {
                    updateIndex: updateIndex,
                    updatedEducation: updatedEducation,
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

// TODO: Use delete states
export const deleteEducation = (
    currentEducations: Education[],
    deleteIndex: number,
    deletedEducation: Education,
    userId: string
) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_EDUCATION,
            payload: {
                deleteIndex: deleteIndex,
            },
        });

        try {
            await axios.delete(
                api + "education/" + userId + "/" + deletedEducation.id, config
            );

            dispatch({
                type: ActionType.DELETE_EDUCATION_SUCCESS,
                payload: {
                    deleteIndex: deleteIndex,
                },
            });

            let updatedEducations = currentEducations.filter(
                (value) => value !== deletedEducation
            );

            updatedEducations.forEach((value, index) => {
                value.serial = index;
                dispatch<any>(updateEducation(index, value, userId));
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
    firstEducation: Education,
    secondEducation: Education,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        // Set both component to loading mode
        dispatch({
            type: ActionType.UPDATE_EDUCATION,
            payload: {
                updateIndex: firstEducation.serial,
            },
        });
        dispatch({
            type: ActionType.UPDATE_EDUCATION,
            payload: {
                updateIndex: secondEducation.serial,
            },
        });

        // Swap the serial
        const firstIndex = firstEducation.serial;
        const secondIndex = secondEducation.serial;

        firstEducation = { ...firstEducation, serial: secondIndex };
        secondEducation = { ...secondEducation, serial: firstIndex };
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            await axios.put(
                api + "education/" + userId + "/" + firstEducation.id,
                firstEducation,
                config
            );

            await axios.put(
                api + "education/" + userId + "/" + secondEducation.id,
                secondEducation,
                config
            );

            dispatch({
                type: ActionType.UPDATE_EDUCATION_SUCCESS,
                payload: {
                    updateIndex: firstIndex,
                    updatedEducation: secondEducation,
                },
            });

            dispatch({
                type: ActionType.UPDATE_EDUCATION_SUCCESS,
                payload: {
                    updateIndex: secondIndex,
                    updatedEducation: firstEducation,
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
