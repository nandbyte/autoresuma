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
    loading: boolean[];
    updating: boolean[];
    savedState: Education[];
    currentState: Education[];
    error: string | null;
}

const initialState: EducationState = {
    loading: [false],
    updating: [false],
    savedState: [],
    currentState: [],
    error: null,
};

const reducer = (
    state: EducationState = initialState,
    action: Action
): EducationState => {
    switch (action.type) {
        case ActionType.FETCH_EDUCATIONS:
            return {
                loading: Array(state.currentState.length).fill(true),
                updating: state.updating,
                error: null,
                savedState: [],
                currentState: [],
            };

        case ActionType.FETCH_EDUCATIONS_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: state.updating,
                error: null,
                savedState: action.payload,
                currentState: action.payload,
            };

        case ActionType.UPDATE_EDUCATION:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.savedState,
            };

        case ActionType.UPDATE_EDUCATION_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload]: false,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
            };

        case ActionType.SAVE_EDUCATIONS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
            };

        case ActionType.SAVE_EDUCATIONS_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.targetIndex]: false,
                }),
                error: null,
                savedState: Object.assign([], state.savedState, {
                    [action.payload.targetIndex]:
                        action.payload.updatedEducation,
                }),
                currentState: Object.assign([], state.currentState, {
                    [action.payload.targetIndex]:
                        action.payload.updatedEducation,
                }),
            };

        case ActionType.ADD_EDUCATION:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: action.payload,
                currentState: action.payload,
            };

        case ActionType.EDUCATION_ERROR:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: action.payload,
                savedState: state.savedState,
                currentState: state.savedState,
            };

        default:
            return state;
    }
};

export default reducer;
