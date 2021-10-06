import { ActionType } from "../action-types";
import { Project } from "../types";

interface FetchProjectsAction {
    type: ActionType.FETCH_PROJECTS;
}

interface FetchProjectsSuccessAction {
    type: ActionType.FETCH_PROJECTS_SUCCESS;
    payload: {
        projects: Project[];
    };
}

interface FormUpdateProjectAction {
    type: ActionType.FORM_UPDATE_PROJECT;
    payload: {
        formIndex: number;
    };
}

interface FormUpdateProjectSuccessAction {
    type: ActionType.FORM_UPDATE_PROJECT_SUCCESS;
    payload: {
        formIndex: number;
    };
}

interface UpdateProjectsAction {
    type: ActionType.UPDATE_PROJECT;
    payload: {
        updateIndex: number;
    };
}

interface UpdateProjectsSuccessAction {
    type: ActionType.UPDATE_PROJECT_SUCCESS;
    payload: {
        updateIndex: number;
        updatedProject: Project;
    };
}

interface AddProjectAction {
    type: ActionType.ADD_PROJECT;
    payload: {
        newIndex: number;
    };
}
interface CancelAddProjectAction {
    type: ActionType.CANCEL_ADD_PROJECT;
}

interface AddProjectSuccessAction {
    type: ActionType.ADD_PROJECT_SUCCESS;
    payload: {
        newIndex: number;
        newProject: Project;
    };
}

interface SwitchAddProjectAction {
    type: ActionType.SWITCH_ADD_PROJECT;
}

interface SaveNewProjectAction {
    type: ActionType.SAVE_NEW_PROJECT;
    payload: {
        newIndex: number;
        newProject: Project;
    };
}

interface SaveNewProjectSuccessAction {
    type: ActionType.SAVE_NEW_PROJECT_SUCCESS;
    payload: {
        newIndex: number;
        newProject: Project;
    };
}

interface DeleteProjectAction {
    type: ActionType.DELETE_PROJECT;
    payload: {
        deleteIndex: number;
    };
}

interface DeleteProjectSuccessAction {
    type: ActionType.DELETE_PROJECT_SUCCESS;
    payload: {
        deleteIndex: number;
    };
}

interface ProjectErrorAction {
    type: ActionType.PROJECT_ERROR;
    payload: {
        error: string;
    };
}

type ProjectAction =
    | FetchProjectsAction
    | FetchProjectsSuccessAction
    | FormUpdateProjectAction
    | FormUpdateProjectSuccessAction
    | UpdateProjectsAction
    | UpdateProjectsSuccessAction
    | AddProjectAction
    | CancelAddProjectAction
    | AddProjectSuccessAction
    | SwitchAddProjectAction
    | SaveNewProjectAction
    | SaveNewProjectSuccessAction
    | DeleteProjectAction
    | DeleteProjectSuccessAction
    | ProjectErrorAction;

export default ProjectAction;
