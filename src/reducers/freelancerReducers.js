import { FREELANCER_GET_FAIL, FREELANCER_GET_REQUEST, FREELANCER_GET_SUCCESS } from "../constants/freelancerConstants"

export const getFreelancerReducer = (state = {}, action) => {
    switch (action.type) {
        case FREELANCER_GET_REQUEST:
            return {loading: true}
            
        case FREELANCER_GET_SUCCESS:
            return {loading: false, response: action.payload}
            
        case FREELANCER_GET_FAIL:
            return {loading: false, error: action.payload}
            
        default:
            return state
    }
}