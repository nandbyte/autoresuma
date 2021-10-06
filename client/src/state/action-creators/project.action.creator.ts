import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Project } from "../types";

const api: string = "http://localhost:3000/v1/";

export const fetchProjects = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FETCH_PROJECTS });

        try {
            const { data } = await axios.get(api + "project/" + userId);

            const projects: Project[] = data.record;

            dispatch({
                type: ActionType.FETCH_PROJECTS_SUCCESS,
                payload: {
                    projects: projects,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.PROJECT_ERROR,
                payload: error.message,
            });
        }
    };
};

// TODO: Update
export const addProject = (newProject: Project, userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_PROJECT,
            payload: {
                newIndex: newProject.serial,
                newProject: newProject,
            },
        });

        try {
            const { data } = await axios.post(
                api + "project/" + userId,
                newProject
            );

            console.log(newProject);
            console.log(data);

            dispatch({
                type: ActionType.ADD_PROJECT_SUCCESS,
                payload: {
                    newIndex: newProject.serial,
                    newProject: data.record,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.PROJECT_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

export const switchToAddProjectMode = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SWITCH_ADD_PROJECT,
        });
    };
};

export const cancelAddProject = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CANCEL_ADD_PROJECT,
        });
    };
};

// Fix this to send all projects
export const updateProject = (
    updateIndex: number,
    updatedProject: Project,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_PROJECT,
            payload: {
                updateIndex: updateIndex,
            },
        });

        try {
            await axios.put(
                api + "project/" + userId + "/" + updatedProject.id,
                updatedProject
            );

            dispatch({
                type: ActionType.UPDATE_PROJECT_SUCCESS,
                payload: {
                    updateIndex: updateIndex,
                    updatedProject: updatedProject,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.PROJECT_ERROR,
                payload: error.message,
            });
        }
    };
};

// TODO: Use delete states
export const deleteProject = (
    currentProjects: Project[],
    deleteIndex: number,
    deletedProject: Project,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_PROJECT,
            payload: {
                deleteIndex: deleteIndex,
            },
        });

        try {
            await axios.delete(
                api + "project/" + userId + "/" + deletedProject.id
            );

            dispatch({
                type: ActionType.DELETE_PROJECT_SUCCESS,
                payload: {
                    deleteIndex: deleteIndex,
                },
            });

            let updatedProjects = currentProjects.filter(
                (value) => value !== deletedProject
            );

            updatedProjects.forEach((value, index) => {
                value.serial = index;
                dispatch<any>(updateProject(index, value, userId));
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.PROJECT_ERROR,
                payload: error.message,
            });
        }
    };
};

export const switchToProjectForm = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_PROJECT,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const switchToProjectView = (index: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FORM_UPDATE_PROJECT_SUCCESS,
            payload: {
                formIndex: index,
            },
        });
    };
};

export const swapProject = (
    firstProject: Project,
    secondProject: Project,
    userId: string
) => {
    return async (dispatch: Dispatch<Action>) => {
        // Set both component to loading mode
        dispatch({
            type: ActionType.UPDATE_PROJECT,
            payload: {
                updateIndex: firstProject.serial,
            },
        });
        dispatch({
            type: ActionType.UPDATE_PROJECT,
            payload: {
                updateIndex: secondProject.serial,
            },
        });

        // Swap the serial
        const firstIndex = firstProject.serial;
        const secondIndex = secondProject.serial;

        firstProject = { ...firstProject, serial: secondIndex };
        secondProject = { ...secondProject, serial: firstIndex };

        try {
            await axios.put(
                api + "project/" + userId + "/" + firstProject.id,
                firstProject
            );

            await axios.put(
                api + "project/" + userId + "/" + secondProject.id,
                secondProject
            );

            dispatch({
                type: ActionType.UPDATE_PROJECT_SUCCESS,
                payload: {
                    updateIndex: firstIndex,
                    updatedProject: secondProject,
                },
            });

            dispatch({
                type: ActionType.UPDATE_PROJECT_SUCCESS,
                payload: {
                    updateIndex: secondIndex,
                    updatedProject: firstProject,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.PROJECT_ERROR,
                payload: error.message,
            });
        }
    };
};
