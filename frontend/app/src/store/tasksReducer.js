const defaultState = [
    
];


const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
          return [...state, action.payload]
        case REMOVE_TASK:
            return state.filter(skill => skill.id !== action.payload)
        default:
            return state
    }
}

export const createAddTaskAction = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    }
}

export const createRemoveTaskAction = (payload) => {
    return {
        type: REMOVE_TASK,
        payload: payload,
    }
}