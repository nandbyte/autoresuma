import { ActionType } from "../action-types";
import { Action } from "../actions";
import { User } from "../types";

interface UserState {
    // User logged in status
    loggedIn: boolean;

    // Saved state on server
    user: User | null;

    // Initial fetching
    loading: boolean;

    // Error
    error: string | null;
}

const initialState: UserState = {
    loggedIn: false,
    user: null,
    loading: false,
    error: null,
};

const reducer = (
    state: UserState = initialState,
    action: Action
): UserState => {
    switch (action.type) {
        // Log In
        case ActionType.USER_LOG_IN:
            return {
                loggedIn: false,
                user: null,
                loading: true,
                error: null,
            };

        // After login
        case ActionType.USER_LOG_IN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload.user,
                loading: false,
                error: null,
            };

        // Log out
        case ActionType.USER_LOG_OUT:
            return {
                loggedIn: false,
                user: null,
                loading: false,
                error: null,
            };

        // Register
        case ActionType.USER_REGISTER:
            return {
                loggedIn: false,
                user: null,
                loading: true,
                error: null,
            };

        //Successful registration
        case ActionType.USER_REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload.user,
                loading: false,
                error: null,
            };

        case ActionType.USER_ERROR:
            return {
                loggedIn: false,
                user: null,
                loading: true,
                error: action.payload.error,
            };

        default:
            return state;
    }
};

export default reducer;
