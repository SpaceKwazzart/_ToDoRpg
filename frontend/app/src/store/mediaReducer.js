const defaultState = {
    lang: "ru",
    isDesktop: true,
}


const SET_LANG = "SET_LANG"
const SET_DISPLAY_TYPE = "SET_DISPLAY_TYPE"

export const mediaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LANG:
          return {...state, lang: action.payload}
        case SET_DISPLAY_TYPE:
            return {...state, isDesktop: action.payload}
        default:
            return state
    }
}

export const createSetLangAction = (payload) => {
    return {
        type: SET_LANG,
        payload: payload,
    }
}

export const createSetDisplayTypeAction = (payload) => {
    return {
        type: SET_DISPLAY_TYPE,
        payload: payload,
    }
}