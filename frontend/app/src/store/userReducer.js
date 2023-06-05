const defaultState = {
    id: 0,
    isAuth: false,
    level: 0,
    currentExp: 50,
    currentMax: 100,
}

// Growth value
const GROWTH_VALUE = 1.0673003

// Auth action-types
const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"

// Progress action-types
const ADD_EXP = "ADD_EXP"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                 isAuth: action.payload
                }

        case SIGN_OUT:
            return {
                ...state,
                 isAuth: action.payload
                }

        case ADD_EXP:
            const newExp = state.currentExp + action.payload

            if (newExp > state.currentMax) {
                return {
                    ...state,
                    currentExp: newExp - state.currentMax,
                    level: state.level += 1,
                    currentMax: state.currentMax * GROWTH_VALUE,     
                    }
            } else {
                return {
                    ...state,
                     currentExp: newExp
                    }
            }
        default:
            return state
    }
}

export const createSigninAction = () => {
    return {
        type: SIGN_IN,
        payload: true,
    }
}

export const createSignoutAction = () => {
    return {
        type: SIGN_OUT,
        payload: false,
    }
}

export const createAddexpAction = (payload) => {
    return {
        type: ADD_EXP,
        payload: payload,
    }
}