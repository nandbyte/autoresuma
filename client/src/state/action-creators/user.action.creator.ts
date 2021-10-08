import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { User } from "../types";

const api: string = "http://localhost:3000/v1/";

export const register = (newUser: User) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER_REGISTER,
        });

        try {
            const { data } = await axios.post(api + "profile/", newUser);

            const user: User = data.record;

            dispatch({
                type: ActionType.USER_REGISTER_SUCCESS,
                payload: {
                    user: user,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.USER_ERROR,
                payload: error.message,
            });
            console.log(error);
        }
    };
};

export const logIn = (email: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.USER_LOG_IN });

        try {
            const { data } = await axios.get(api + "profile/" + email, {
                data: password,
            });

            const user: User = data.record;

            dispatch({
                type: ActionType.USER_LOG_IN_SUCCESS,
                payload: {
                    user: user,
                },
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.USER_ERROR,
                payload: error.message,
            });
        }
    };
};

export const logOut = (userId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER_LOG_OUT,
        });
    };
};
