const defaultState = [
    {
        id: 1000, 
        name: "Read about Asembly",
        text: "Just text what u need to do and more more text Just text what u need to do and more more text",
        order: 1,
    },
    {
        id: 1001, 
        name: "End popup feature",
        text: "Just text what u need to do",
        order: 2,
    },
    {
        id: 1002, 
        name: "End popup feature",
        text: "Just text what u need to do",
        order: 2,
    },
    { 
        id: 1003, 
        name: "End popup feature",
        text: "Just text what u need to do",
        order: 2,
    },
    {
        id: 1004, 
        name: "Read about Asembly",
        text: "Just text what u need to do and more more text Just text what u need to do and more more text",
        order: 1,
    },
    {
        id: 1005, 
        name: "End popup feature",
        text: "Just text what u need to do",
        order: 2,
    },
    { 
        id: 1006, 
        name: "End popup feature",
        text: "Just text what u need to do",
        order: 2,
    },
    {
        id: 1007, 
        name: "Read about Asembly",
        text: "Just text what u need to do and more more text Just text what u need to do and more more text",
        order: 1,
    },
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