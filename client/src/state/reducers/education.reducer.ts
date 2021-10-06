// Design the store in paper (reducers, actions, action creators, action types)
// Create a Reducer state interface
// Create interfaces for all Actions
// Create a combined Action type
// Create an ActionType enum for the action types
// Create the reducer

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Education } from "../types";

interface EducationState {
    // Current state on client
    currentState: Education[];

    // Saved state on server
    savedState: Education[];

    // Initial fetching
    loading: boolean[];

    // Form mode
    updating: boolean[];

    // If any new education is being added
    adding: boolean;

    // Error
    error: string | null;
}

const initialState: EducationState = {
    currentState: [],
    savedState: [],
    loading: [false],
    updating: [],
    adding: false,
    error: null,
};

const reducer = (
    state: EducationState = initialState,
    action: Action
): EducationState => {
    switch (action.type) {
        // Fetch from database on first load
        case ActionType.FETCH_EDUCATIONS:
            return {
                loading: [false],
                updating: [],
                error: null,
                savedState: [],
                currentState: [],
                adding: false,
            };

        // First fetch success
        case ActionType.FETCH_EDUCATIONS_SUCCESS:
            return {
                loading: Array(action.payload.educations.length).fill(false),
                updating: Array(action.payload.educations.length).fill(false),
                error: null,
                savedState: action.payload.educations.sort(
                    (a, b) => a.serial - b.serial
                ),
                currentState: action.payload.educations.sort(
                    (a, b) => a.serial - b.serial
                ),
                adding: false,
            };

        // Form mode
        case ActionType.FORM_UPDATE_EDUCATION:
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
        case ActionType.FORM_UPDATE_EDUCATION_SUCCESS:
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

        // Update education to database
        case ActionType.UPDATE_EDUCATION:
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
        case ActionType.UPDATE_EDUCATION_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: Object.assign([], state.savedState, {
                    [action.payload.updateIndex]:
                        action.payload.updatedEducation,
                }),
                currentState: Object.assign([], state.currentState, {
                    [action.payload.updateIndex]:
                        action.payload.updatedEducation,
                }).sort((a: Education, b: Education) => a.serial - b.serial),
                adding: false,
            };

        // Form mode for new education
        case ActionType.ADD_EDUCATION:
            return {
                loading: state.loading.concat(true),
                updating: state.updating.concat(false),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Form mode for new education
        case ActionType.SWITCH_ADD_EDUCATION:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: true,
            };

        // Cancel new education
        case ActionType.CANCEL_ADD_EDUCATION:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new education
        case ActionType.ADD_EDUCATION_SUCCESS:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.newIndex]: false,
                }),
                updating: state.updating,
                error: null,
                savedState: state.currentState.concat(
                    action.payload.newEducation
                ),
                currentState: state.currentState.concat(
                    action.payload.newEducation
                ),
                adding: false,
            };

        // Save new education to database
        case ActionType.SAVE_NEW_EDUCATION:
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

        // View mode for new education
        case ActionType.SAVE_NEW_EDUCATION_SUCCESS:
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

        // View mode for new education
        case ActionType.DELETE_EDUCATION:
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

        // View mode for new education
        case ActionType.DELETE_EDUCATION_SUCCESS:
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

        case ActionType.EDUCATION_ERROR:
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
