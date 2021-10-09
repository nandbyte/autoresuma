import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Skill } from "../types";

interface SkillState {
    // Current state on client
    currentState: Skill[];

    // Saved state on server
    savedState: Skill[];

    // Initial fetching
    loading: boolean[];

    // Form mode
    updating: boolean[];

    // If any new skill is being added
    adding: boolean;

    // Error
    error: string | null;
}

const initialState: SkillState = {
    currentState: [],
    savedState: [],
    loading: [false],
    updating: [],
    adding: false,
    error: null,
};

const reducer = (
    state: SkillState = initialState,
    action: Action
): SkillState => {
    switch (action.type) {
        // Fetch from database on first load
        case ActionType.FETCH_SKILLS:
            return {
                loading: [false],
                updating: [],
                error: null,
                savedState: [],
                currentState: [],
                adding: false,
            };

        // First fetch success
        case ActionType.FETCH_SKILLS_SUCCESS:
            return {
                loading: Array(action.payload.skills.length).fill(false),
                updating: Array(action.payload.skills.length).fill(false),
                error: null,
                savedState: action.payload.skills.sort(
                    (a: Skill, b: Skill) => a.serial - b.serial
                ),
                currentState: action.payload.skills.sort(
                    (a: Skill, b: Skill) => a.serial - b.serial
                ),
                adding: false,
            };

        // Form mode
        case ActionType.FORM_UPDATE_SKILL:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.formIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode
        case ActionType.FORM_UPDATE_SKILL_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.formIndex]: false,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Update skill to database
        case ActionType.UPDATE_SKILL:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.updateIndex]: true,
                }),
                updating: Object.assign([], state.updating, {
                    [action.payload.updateIndex]: false,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Updating successful
        case ActionType.UPDATE_SKILL_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: null,
                savedState: Object.assign([], state.savedState, {
                    [action.payload.updateIndex]: action.payload.updatedSkill,
                }),
                currentState: Object.assign([], state.currentState, {
                    [action.payload.updateIndex]: action.payload.updatedSkill,
                }).sort((a: Skill, b: Skill) => a.serial - b.serial),
                adding: false,
            };

        // Form mode for new skill
        case ActionType.ADD_SKILL:
            return {
                loading: state.loading.concat(true),
                updating: state.updating.concat(false),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // Form mode for new skill
        case ActionType.SWITCH_ADD_SKILL:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: true,
            };

        // Cancel new skill
        case ActionType.CANCEL_ADD_SKILL:
            return {
                loading: state.loading,
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new skill
        case ActionType.ADD_SKILL_SUCCESS:
            return {
                loading: Object.assign([], state.loading, {
                    [action.payload.newIndex]: false,
                }),
                updating: state.updating,
                error: null,
                savedState: state.currentState.concat(action.payload.newSkill),
                currentState: state.currentState.concat(
                    action.payload.newSkill
                ),
                adding: false,
            };

        // Save new skill to database
        case ActionType.SAVE_NEW_SKILL:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.newIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new skill
        case ActionType.SAVE_NEW_SKILL_SUCCESS:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Object.assign([], state.updating, {
                    [action.payload.newIndex]: true,
                }),
                error: null,
                savedState: state.savedState,
                currentState: state.currentState.sort(
                    (a: Skill, b: Skill) => a.serial - b.serial
                ),
                adding: false,
            };

        // View mode for new skill
        case ActionType.DELETE_SKILL:
            return {
                loading: Object.assign([], state.updating, {
                    [action.payload.deleteIndex]: true,
                }),
                updating: state.updating,
                error: null,
                savedState: state.savedState,
                currentState: state.currentState,
                adding: false,
            };

        // View mode for new skill
        case ActionType.DELETE_SKILL_SUCCESS:
            return {
                loading: state.loading.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                updating: state.loading.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                error: null,
                savedState: state.savedState.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                currentState: state.currentState.filter(
                    (value, index) => index !== action.payload.deleteIndex
                ),
                adding: false,
            };

        case ActionType.SKILL_ERROR:
            return {
                loading: Array(state.currentState.length).fill(false),
                updating: Array(state.currentState.length).fill(false),
                error: action.payload.error,
                savedState: state.savedState,
                currentState: state.savedState,
                adding: false,
            };

        default:
            return state;
    }
};

export default reducer;
