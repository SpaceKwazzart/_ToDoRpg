const GROWTH_VALUE = 1.0673003

const defaultState = [
    
];


const ADD_SKILL = "ADD_SKILL";
const DELETE_SKILL = "DELETE_SKILL";
const ADD_SKILL_EXP = "ADD_SKILL_EXP";

export const skillsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SKILL:
          const newSkill = {
            id: state[state.length - 1] ? [state.length - 1].id + 1 : 0,
            name: action.payload,
            currentExp: 0,
            currentMax: 1,
            order: 1,
            level: 1,
          }  
          return [newSkill, ...state,]
        case DELETE_SKILL:
            return state.filter(skill => skill.id !== action.payload)
        case ADD_SKILL_EXP:
            const newState = state.map(skill => {
                if (skill.id !== action.payload.id) {
                    return skill;
                } else {
                    let newExp = skill.currentExp + action.payload.exp;
                    while (newExp >= skill.currentMax) {
                        skill = {
                            ...skill,
                            currentExp: newExp - skill.currentMax,
                            level: skill.level += 1,
                            currentMax: skill.currentMax * GROWTH_VALUE,     
                            }
                        newExp = skill.currentExp;
                    } 
                    return {
                        ...skill,
                        currentExp: newExp,
                        }
            }})
            return newState
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
        type: ADD_SKILL_EXP,
        payload: payload,
    }
}