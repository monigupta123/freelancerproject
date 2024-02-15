import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers
import { userSignupReducer , userSigninReducer} from './reducers/userReducers';
import {addTrainingReducer, getTrainingReducer} from './reducers/trainingReducers'
import { getFreelancerReducer } from './reducers/freelancerReducers';

// Combine your reducers
const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin:userSigninReducer,
    addTrainingNotes:addTrainingReducer,
    getAllTraining:getTrainingReducer,
    getAllFreelancer:getFreelancerReducer
});

// Create the Redux store with middleware
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger,thunk))
)

export default store
