import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { User } from "../types";
import { apiRoot } from "../../data/api";
const bcrypt = require("bcryptjs");

const api: string = apiRoot + "v1/profile/";

export const register = (newUser: User) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.USER_REGISTER,
        });

        try {
            const salt = "$2a$06$W5QisC7wqeiQDrkAbMNoYe";

            const hashed = await bcrypt.hash(newUser.password, salt);
            newUser.password = hashed;
            console.log(salt);
            // console.log(newUser.password);

            const { data } = await axios.post(api, newUser);

            if (data.status === 400) {
                dispatch({
                    type: ActionType.USER_ERROR,
                    payload: {
                        error: "Email is already registered.",
                    },
                });
            } else {
                const user: User = data.record;

                dispatch({
                    type: ActionType.USER_REGISTER_SUCCESS,
                    payload: {
                        user: user,
                    },
                });
            }
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
        // console.log(email, password);
        const salt = "$2a$06$W5QisC7wqeiQDrkAbMNoYe";
        // console.log(salt);
        const hashed = await bcrypt.hash(password, salt);
        password = hashed;
        // console.log(password);

        try {
            const { data } = await axios.post(api + "login/", {
                email,
                password,
            });

            if (data.status === 204) {
                dispatch({
                    type: ActionType.USER_ERROR,
                    payload: {
                        error: "Credentials did not match.",
                    },
                });
            } else {
                // console.log(data.data.token);
                const token: string = data.data.token;
                // console.log(data.data);
                localStorage.setItem("token", token);
                const user: User = data.data;

                dispatch({
                    type: ActionType.USER_LOG_IN_SUCCESS,
                    payload: {
                        user: user,
                    },
                });
            }
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
        localStorage.removeItem("token");

        dispatch({
            type: ActionType.USER_LOG_OUT,
        });
    };
};
