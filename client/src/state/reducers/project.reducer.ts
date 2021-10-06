import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Project } from "../types";

interface ProjectState {
    // Current state on client
    currentState: Project[];

    // Saved state on server
    savedState: Project[];

    // Initial fetching
    loading: boolean[];

    // Form mode
    updating: boolean[];

    // If any new project is being added
    adding: boolean;

    // Error
    error: string | null;
}

const initialState: ProjectState = {
    currentState: [],
    savedState: [],
    loading: [false],
    updating: [],
    adding: false,
    error: null,
};

const reducer = (
    state: ProjectState = initialState,
    action: Action
): ProjectState => {
    switch (action.type) {
        // Fetch from database on first load
        case ActionType.FETCH_PROJECTS:
            return {
                loading: [false],
                updating: [],
                error: null,
                savedState: [],
                currentState: [],
                adding: false,
            };

        // First fetch success
        case ActionType.FETCH_PROJECTS_SUCCESS:
            return {
                loading: Array(action.payload.projects.length).fill(false),
                updating: Array(action.payload.projects.length).fill(false),
                error: null,
                savedState: action.payload.projects.sort(
                    (a: Project, b: Project) => a.serial - b.serial
                ),
                currentState: action.payload.projects.sort(
                    (a: Project, b: Project) => a.serial - b.serial
                ),
                adding: false,
            };

        // Form mode
        case ActionType.FORM_UPDATE_PROJECT:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.formIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode
        case ActionType.FORM_UPDATE_PROJECT_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.formIndex]: false,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Update project to database
        case ActionType.UPDATE_PROJECT:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.updateIndex]: true,
                }),
                updating: Object.assign([], state.updating, {
                    [action.payload.updateIndex]: false,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Updating successful
        case ActionType.UPDATE_PROJECT_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: Object.assign([], state.savedState, {
                    [action.payload.updateIndex]: action.payload.updatedProject,
                }),
                currentState: Object.assign([], state.currentState, {
                    [action.payload.updateIndex]: action.payload.updatedProject,
                }).sort((a: Project, b: Project) => a.serial - b.serial),
                adding: false,
            };

        // Form mode for new project
        case ActionType.ADD_PROJECT:
            return {
                loading: state.loading.concat(true),
                updating: state.updating.concat(false),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Form mode for new project
        case ActionType.SWITCH_ADD_PROJECT:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: true,
            };

        // Cancel new project
        case ActionType.CANCEL_ADD_PROJECT:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new project
        case ActionType.ADD_PROJECT_SUCCESS:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.newIndex]: false,
                }),
                updating: state.updating,
                error: null,
                savedState: state.currentState.concat(
                    action.payload.newProject
                ),
                currentState: state.currentState.concat(
                    action.payload.newProject
                ),
                adding: false,
            };

        // Save new project to database
        case ActionType.SAVE_NEW_PROJECT:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.newIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new project
        case ActionType.SAVE_NEW_PROJECT_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.newIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState.sort(
                    (a, b) => a.serial - b.serial
                ),
                adding: false,
            };

        // View mode for new project
        case ActionType.DELETE_PROJECT:
            return {
                loading: Object.assign([], state.updating, {
                    [action.payload.deleteIndex]: true,
                }),
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new project
        case ActionType.DELETE_PROJECT_SUCCESS:
            return {
                loading: state.loading.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                updating: state.loading.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                error: null,
                savedState: state.savedState.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                currentState: state.currentState.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                adding: false,
            };

        case ActionType.PROJECT_ERROR:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: action.payload.error,
                savedState: state.savedState,
                currentState: state.savedState,
                adding: false,
            };

        default:
            return state;
    }
};

export default reducer;
