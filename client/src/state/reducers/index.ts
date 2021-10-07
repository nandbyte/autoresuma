import { combineReducers } from "redux";
import bioReducer from "./bio.reducer";
import educationReducer from "./education.reducer";
import projectReducer from "./project.reducer";
import experienceReducer from "./experience.reducer";

const reducers = combineReducers({
    bio: bioReducer,
    educations: educationReducer,
    projects: projectReducer,
    experiences: experienceReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
