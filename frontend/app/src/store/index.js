import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './userReducer';
import { mediaReducer } from './mediaReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user: userReducer,
    media: mediaReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
