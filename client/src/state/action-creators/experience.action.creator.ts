import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Experience } from "../types";
import { apiRoot } from "../../data/api";

const api: string = apiRoot + "v1/experience/";

export const fetchExperiences = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_EXPERIENCES });
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await axios.get(api + userId, config);

            const experiences: Experience[] = data.record;

            dispatch({
                type: ActionType.FETCH_EXPERIENCES_SUCCESS,
                payload: {
                    experiences: experiences,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EXPERIENCE_ERROR,
                payload: error.message,
            });
        }
    };
};

export const addExperience = (newExperience: Experience, userId: string) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_EXPERIENCE,
            payload: {
                newIndex: newExperience.serial,
                newExperience: newExperience,
            },
        });

        try {
            const { data } = await axios.post(
                api + userId,
                newExperience,
                config
            );

            dispatch({
                type: ActionType.ADD_EXPERIENCE_SUCCESS,
                payload: {
                    newIndex: newExperience.serial,
                    newExperience: data.record,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EXPERIENCE_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

export const switchToAddExperienceMode = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SWITCH_ADD_EXPERIENCE,
        });
    };
};

export const cancelAddExperience = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CANCEL_ADD_EXPERIENCE,
        });
    };
};

// Fix this to send all experiences
export const updateExperience = (
    updateIndex: number,
    updatedExperience: Experience,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_EXPERIENCE,
            payload: {
                updateIndex: updateIndex,
            },
        });
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            await axios.put(
                api + userId + "/" + updatedExperience.id,
                updatedExperience,
                config
            );

            dispatch({
                type: ActionType.UPDATE_EXPERIENCE_SUCCESS,
                payload: {
                    updateIndex: updateIndex,
                    updatedExperience: updatedExperience,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EXPERIENCE_ERROR,
                payload: error.message,
            });
        }
    };
};

// TODO: Use delete states
export const deleteExperience = (
    currentExperiences: Experience[],
    deleteIndex: number,
    deletedExperience: Experience,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_EXPERIENCE,
            payload: {
                deleteIndex: deleteIndex,
            },
        });
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            await axios.delete(
                api + userId + "/" + deletedExperience.id,
                config
            );

            dispatch({
                type: ActionType.DELETE_EXPERIENCE_SUCCESS,
                payload: {
                    deleteIndex: deleteIndex,
                },
            });

            let updatedExperiences = currentExperiences.filter(
                (value) => value !== deletedExperience
            );

            updatedExperiences.forEach((value, index) => {
                value.serial = index;
                dispatch<any>(updateExperience(index, value, userId));
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EXPERIENCE_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToExperienceForm = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_EXPERIENCE,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const switchToExperienceView = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_EXPERIENCE_SUCCESS,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const swapExperience = (
    firstExperience: Experience,
    secondExperience: Experience,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        // Set both component to loading mode
        dispatch({
            type: ActionType.UPDATE_EXPERIENCE,
            payload: {
                updateIndex: firstExperience.serial,
            },
        });
        dispatch({
            type: ActionType.UPDATE_EXPERIENCE,
            payload: {
                updateIndex: secondExperience.serial,
            },
        });

        // Swap the serial
        const firstIndex = firstExperience.serial;
        const secondIndex = secondExperience.serial;

        firstExperience = { ...firstExperience, serial: secondIndex };
        secondExperience = { ...secondExperience, serial: firstIndex };

        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await axios.put(
                api + userId + "/" + firstExperience.id,
                firstExperience
            );

            await axios.put(
                api + userId + "/" + secondExperience.id,
                secondExperience,
                config
            );

            dispatch({
                type: ActionType.UPDATE_EXPERIENCE_SUCCESS,
                payload: {
                    updateIndex: firstIndex,
                    updatedExperience: secondExperience,
                },
            });

            dispatch({
                type: ActionType.UPDATE_EXPERIENCE_SUCCESS,
                payload: {
                    updateIndex: secondIndex,
                    updatedExperience: firstExperience,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.EXPERIENCE_ERROR,
                payload: error.message,
            });
        }
    };
};
