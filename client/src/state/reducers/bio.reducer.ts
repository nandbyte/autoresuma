// Design the store in paper (reducers, actions, action creators, action types)
// Create a Reducer state interface
// Create interfaces for all Actions
// Create a combined Action type
// Create an ActionType enum for the action types
// Create the reducer

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Bio } from "../types";

interface BioState {
    loading: boolean;
    updating: boolean;
    saving: boolean;
    savedState: Bio | null;
    currentState: Bio | null;
    error: string | null;
}

const initialState: BioState = {
    loading: false,
    updating: false,
    saving: false,
    savedState: null,
    currentState: null,
    error: null,
};

const reducer = (state: BioState = initialState, action: Action): BioState => {
    switch (action.type) {
        case ActionType.FETCH_BIO:
            return {
                loading: true,
                updating: state.updating,
                saving: false,
                error: null,
                savedState: null,
                currentState: null,
            };
        case ActionType.FETCH_BIO_SUCCESS:
            return {
                loading: false,
                updating: state.updating,
                saving: false,
                error: null,
                savedState: action.payload,
                currentState: action.payload,
            };
        case ActionType.SAVE_BIO:
            return {
                loading: false,
                updating: false,
                saving: true,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
            };
        case ActionType.SAVE_BIO_SUCCESS:
            return {
                loading: false,
                updating: false,
                saving: false,
                error: null,
                savedState: action.payload,
                currentState: state.currentState,
            };
        case ActionType.SAVE_CURRENT_BIO:
            return {
                loading: false,
                updating: false,
                saving: false,
                error: null,
                savedState: state.savedState,
                currentState: action.payload,
            };
        case ActionType.UPDATE_BIO:
            return {
                loading: false,
                updating: true,
                saving: false,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
            };
        case ActionType.UPDATE_BIO_SUCCESS:
            return {
                loading: false,
                updating: false,
                saving: false,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
            };

        case ActionType.BIO_ERROR:
            return {
                loading: false,
                updating: false,
                saving: false,
                error: action.payload,
                savedState: state.savedState,
                currentState: state.currentState,
            };

        default:
            return state;
    }
};

export default reducer;
