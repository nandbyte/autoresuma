import { combineReducers } from "redux";
import bioReducer from "./bioReducer";

const reducers = combineReducers({
    bio: bioReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
