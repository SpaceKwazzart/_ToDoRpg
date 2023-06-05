const GROWTH_VALUE = 1.0673003

const defaultState = [
    {
        id: 1000, 
        name: "React",
        order: 1,
        level: 1,
        currentExp: 0.3,
        currentMax: 1,
    },
    {
        id: 1001, 
        name: "DevOps",
        order: 2,
        level: 1,
        currentExp: 0.25,
        currentMax: 1,
    },
    {
        id: 1002, 
        name: "DevOps",
        order: 2,
        level: 1,
        currentExp: 0.25,
        currentMax: 1,
    }
];


const ADD_SKILL = "ADD_SKILL";
const DELETE_SKILL = "DELETE_SKILL";
const ADD_EXP = "ADD_EXP";

export const skillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SKILL:
          return [...state, action.payload]
        case DELETE_SKILL:
            return state.filter(skill => skill.id !== action.payload)
        case ADD_EXP:
            return state
        default:
            return state
    }
}

export const createAddSkillAction = (payload) => {
    return {
        type: ADD_SKILL,
        payload: payload,
    }
}

export const createDeleteSkillTypeAction = (payload) => {
    return {
        type: DELETE_SKILL,
        payload: payload,
    }
}

export const createAddExpSkillTypeAction = (payload) => {
    return {
        type: DELETE_SKILL,
        payload: payload,
    }
}