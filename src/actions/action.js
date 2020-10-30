import axios from 'axios';
export const FETCH_USER_REQUEST ='FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS ='FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE ='export const';
export const fetchUsersRequest = () =>{
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUsersSuccess = (users) =>{
    return {
        type: FETCH_USER_SUCCESS,
        playload : users
    }
}
export const fetchUsersFailure = (error) =>{
    return {
        type: FETCH_USER_FAILURE,
        playload : error
    }
}

export const fetchUsers =() =>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => {
    const users = response.data
    dispatch(fetchUsersSuccess(users))
})
.catch(error => {
    const errorMsg = error.message
    dispatch(fetchUsersFailure(errorMsg))
})
    }
}