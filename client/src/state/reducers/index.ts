import { combineReducers } from "redux";
import bioReducer from "./bio.reducer";
import educationReducer from "./education.reducer";

const reducers = combineReducers({
    bio: bioReducer,
    educations: educationReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
