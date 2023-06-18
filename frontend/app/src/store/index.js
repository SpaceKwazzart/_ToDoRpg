import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer';
import mediaReducer from './mediaReducer';
import skillsReducer from './skillsReducer';
import tasksReducer from './tasksReducer';


export const store = configureStore({
    reducer: {
        user: userReducer,
        media: mediaReducer,
        skills: skillsReducer,
        tasks: tasksReducer,
    }
})

