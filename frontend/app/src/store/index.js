import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer';
import mediaReducer from './mediaReducer';
import skillsReducer from './skillsReducer';
import tasksReducer from './tasksReducer';

// const persistedState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}

export const store = configureStore({
    reducer: {
        user: userReducer,
        media: mediaReducer,
        skills: skillsReducer,
        tasks: tasksReducer,
    },
})

// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
