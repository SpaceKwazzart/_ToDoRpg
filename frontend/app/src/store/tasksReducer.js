import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.unshift(action.payload)
        },
        removeTask: (state, action) => {
            return state.filter(skill => skill.id !== action.payload)
        }
    }
})

export const { addTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer