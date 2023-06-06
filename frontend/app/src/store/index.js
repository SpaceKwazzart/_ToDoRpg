import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './userReducer';
import { mediaReducer } from './mediaReducer';
import { skillsReducer } from './skillsReducer';
import { tasksReducer } from './tasksReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user: userReducer,
    media: mediaReducer,
    skills: skillsReducer,
    tasks: tasksReducer,
})

// const persistedState = localStorage.getItem('reduxState') 
//                        ? JSON.parse(localStorage.getItem('reduxState'))
//                        : {}

export const store = createStore(rootReducer, // persistedState,
     composeWithDevTools(applyMiddleware(thunk)))

// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
