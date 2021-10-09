import { combineReducers } from "redux";
import bioReducer from "./bio.reducer";
import educationReducer from "./education.reducer";
import projectReducer from "./project.reducer";
import skillReducer from "./skill.reducer";
import experienceReducer from "./experience.reducer";
import userReducer from "./user.reducer";

const reducers = combineReducers({
    bio: bioReducer,
    educations: educationReducer,
    projects: projectReducer,
    skills: skillReducer,
    experiences: experienceReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
