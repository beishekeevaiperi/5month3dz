import {FETCH_USERS_SUCCESS} from "../action/action";

const initialState = {
    persons:[]
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                persons: action.payload
            }
        default:
            return state
    }
}
