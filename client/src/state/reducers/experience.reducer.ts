import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Experience } from "../types";

interface ExperienceState {
    // Current state on client
    currentState: Experience[];

    // Saved state on server
    savedState: Experience[];

    // Initial fetching
    loading: boolean[];

    // Form mode
    updating: boolean[];

    // If any new experience is being added
    adding: boolean;

    // Error
    error: string | null;
}

const initialState: ExperienceState = {
    currentState: [],
    savedState: [],
    loading: [false],
    updating: [],
    adding: false,
    error: null,
};

const reducer = (
    state: ExperienceState = initialState,
    action: Action
): ExperienceState => {
    switch (action.type) {
        // Fetch from database on first load
        case ActionType.FETCH_EXPERIENCES:
            return {
                loading: [false],
                updating: [],
                error: null,
                savedState: [],
                currentState: [],
                adding: false,
            };

        // First fetch success
        case ActionType.FETCH_EXPERIENCES_SUCCESS:
            return {
                loading: Array(action.payload.experiences.length).fill(false),
                updating: Array(action.payload.experiences.length).fill(false),
                error: null,
                savedState: action.payload.experiences.sort(
                    (a: Experience, b: Experience) => a.serial - b.serial
                ),
                currentState: action.payload.experiences.sort(
                    (a: Experience, b: Experience) => a.serial - b.serial
                ),
                adding: false,
            };

        // Form mode
        case ActionType.FORM_UPDATE_EXPERIENCE:
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
        case ActionType.FORM_UPDATE_EXPERIENCE_SUCCESS:
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

        // Update experience to database
        case ActionType.UPDATE_EXPERIENCE:
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
        case ActionType.UPDATE_EXPERIENCE_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: Object.assign([], state.savedState, {
                    [action.payload.updateIndex]:
                        action.payload.updatedExperience,
                }),
                currentState: Object.assign([], state.currentState, {
                    [action.payload.updateIndex]:
                        action.payload.updatedExperience,
                }).sort((a: Experience, b: Experience) => a.serial - b.serial),
                adding: false,
            };

        // Form mode for new experience
        case ActionType.ADD_EXPERIENCE:
            return {
                loading: state.loading.concat(true),
                updating: state.updating.concat(false),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Form mode for new experience
        case ActionType.SWITCH_ADD_EXPERIENCE:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: true,
            };

        // Cancel new experience
        case ActionType.CANCEL_ADD_EXPERIENCE:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new experience
        case ActionType.ADD_EXPERIENCE_SUCCESS:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.newIndex]: false,
                }),
                updating: state.updating,
                error: null,
                savedState: state.currentState.concat(
                    action.payload.newExperience
                ),
                currentState: state.currentState.concat(
                    action.payload.newExperience
                ),
                adding: false,
            };

        // Save new experience to database
        case ActionType.SAVE_NEW_EXPERIENCE:
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

        // View mode for new experience
        case ActionType.SAVE_NEW_EXPERIENCE_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.newIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState.sort(
                    (a: Experience, b: Experience) => a.serial - b.serial
                ),
                adding: false,
            };

        // View mode for new experience
        case ActionType.DELETE_EXPERIENCE:
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

        // View mode for new experience
        case ActionType.DELETE_EXPERIENCE_SUCCESS:
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

        case ActionType.EXPERIENCE_ERROR:
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
