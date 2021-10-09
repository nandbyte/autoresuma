import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Skill } from "../types";
import { apiRoot } from "../../data/api";

const api: string = apiRoot + "v1/skill/";

export const fetchSkills = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_SKILLS });
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const { data } = await axios.get(api + userId, config);

            const skills: Skill[] = data.records;

            dispatch({
                type: ActionType.FETCH_SKILLS_SUCCESS,
                payload: {
                    skills: skills,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SKILL_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

// TODO: Update
export const addSkill = (newSkill: Skill, userId: string) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_SKILL,
            payload: {
                newIndex: newSkill.serial,
                newSkill: newSkill,
            },
        });

        try {
            const { data } = await axios.post(api + userId, newSkill, config);

            console.log(newSkill);
            console.log(data);

            dispatch({
                type: ActionType.ADD_SKILL_SUCCESS,
                payload: {
                    newIndex: newSkill.serial,
                    newSkill: data.record,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SKILL_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

export const switchToAddSkillMode = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SWITCH_ADD_SKILL,
        });
    };
};

export const cancelAddSkill = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CANCEL_ADD_SKILL,
        });
    };
};

// Fix this to send all skills
export const updateSkill = (
    updateIndex: number,
    updatedSkill: Skill,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        dispatch({
            type: ActionType.UPDATE_SKILL,
            payload: {
                updateIndex: updateIndex,
            },
        });

        try {
            await axios.put(
                api + userId + "/" + updatedSkill.id,
                updatedSkill,
                config
            );

            dispatch({
                type: ActionType.UPDATE_SKILL_SUCCESS,
                payload: {
                    updateIndex: updateIndex,
                    updatedSkill: updatedSkill,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SKILL_ERROR,
                payload: error.message,
            });
        }
    };
};

// TODO: Use delete states
export const deleteSkill = (
    currentSkills: Skill[],
    deleteIndex: number,
    deletedSkill: Skill,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_SKILL,
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
            await axios.delete(api + userId + "/" + deletedSkill.id, config);

            dispatch({
                type: ActionType.DELETE_SKILL_SUCCESS,
                payload: {
                    deleteIndex: deleteIndex,
                },
            });

            let updatedSkills = currentSkills.filter(
                (value) => value !== deletedSkill
            );

            updatedSkills.forEach((value, index) => {
                value.serial = index;
                dispatch<any>(updateSkill(index, value, userId));
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SKILL_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToSkillForm = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_SKILL,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const switchToSkillView = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_SKILL_SUCCESS,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const swapSkill = (
    firstSkill: Skill,
    secondSkill: Skill,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        // Set both component to loading mode
        dispatch({
            type: ActionType.UPDATE_SKILL,
            payload: {
                updateIndex: firstSkill.serial,
            },
        });

        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        dispatch({
            type: ActionType.UPDATE_SKILL,
            payload: {
                updateIndex: secondSkill.serial,
            },
        });

        // Swap the serial
        const firstIndex = firstSkill.serial;
        const secondIndex = secondSkill.serial;

        firstSkill = { ...firstSkill, serial: secondIndex };
        secondSkill = { ...secondSkill, serial: firstIndex };

        try {
            await axios.put(
                api + userId + "/" + firstSkill.id,
                firstSkill,
                config
            );

            await axios.put(api + userId + "/" + secondSkill.id, secondSkill);

            dispatch({
                type: ActionType.UPDATE_SKILL_SUCCESS,
                payload: {
                    updateIndex: firstIndex,
                    updatedSkill: secondSkill,
                },
            });

            dispatch({
                type: ActionType.UPDATE_SKILL_SUCCESS,
                payload: {
                    updateIndex: secondIndex,
                    updatedSkill: firstSkill,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SKILL_ERROR,
                payload: error.message,
            });
        }
    };
};
