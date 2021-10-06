import { combineReducers } from "redux";
import bioReducer from "./bio.reducer";
import educationReducer from "./education.reducer";
import projectReducer from "./project.reducer";

const reducers = combineReducers({
    bio: bioReducer,
    educations: educationReducer,
    projects: projectReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
