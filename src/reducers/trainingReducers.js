import { TRAINING_ADD_FAIL, TRAINING_ADD_REQUEST, TRAINING_ADD_SUCCESS, TRAINING_FETCH_FAIL, TRAINING_FETCH_REQUEST, TRAINING_FETCH_SUCCESS } from "../constants/trainingConstants"

export const addTrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case TRAINING_ADD_REQUEST:
            return {loading: true}
            
        case TRAINING_ADD_SUCCESS:
            return {loading: false, response: action.payload}
            
        case TRAINING_ADD_FAIL:
            return {loading: false, error: action.payload}
            
        default:
            return state
    }
}

export const getTrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case TRAINING_FETCH_REQUEST:
            return {loading: true}
            
        case TRAINING_FETCH_SUCCESS:
            return {loading: false, response: action.payload}
            
        case TRAINING_FETCH_FAIL:
            return {loading: false, error: action.payload}
            
        default:
            return state
    }
}