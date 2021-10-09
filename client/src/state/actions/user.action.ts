import { ActionType } from "../action-types";
import { User } from "../types";

interface UserLogInAction {
    type: ActionType.USER_LOG_IN;
}

interface UserLogInSuccessAction {
    type: ActionType.USER_LOG_IN_SUCCESS;
    payload: {
        user: User;
    };
}
interface UserLogOutAction {
    type: ActionType.USER_LOG_OUT;
}

interface UserRegisterAction {
    type: ActionType.USER_REGISTER;
}

interface UserRegisterSuccessAction {
    type: ActionType.USER_REGISTER_SUCCESS;
    payload: {
        user: User;
    };
}

interface UserErrorAction {
    type: ActionType.USER_ERROR;
    payload: {
        error: string;
    };
}

type UserAction =
    | UserLogInAction
    | UserLogInSuccessAction
    | UserLogOutAction
    | UserRegisterAction
    | UserRegisterSuccessAction
    | UserErrorAction;

export default UserAction;
