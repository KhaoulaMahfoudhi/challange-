import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/action";
import {fetchUsers} from "../actions/action"
const UserReducer =(state = fetchUsers , action) =>{
    switch(action.type){
        case  FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            }
            case  FETCH_USER_SUCCESS:
            return {
                loading : false,
                users: action.playload,
                error: ''
            }
            case  FETCH_USER_FAILURE:
            return {
                loading : false,
                users: [],
                error: action.playload
            }
            default: return state
    }
}
 export default UserReducer



    