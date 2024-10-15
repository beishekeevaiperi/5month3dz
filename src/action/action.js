export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const fetchUsersSuccess = (data) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}
export const fetchUsers = ()  => {
    return async (dispatch)  => {
        try {
           const response = await fetch('https://api.attackontitanapi.com/characters')
            const data = await response.json()
            console.log(data)
            dispatch(fetchUsersSuccess(data))
        }catch (e){
            console.log(e)
        }
    }
}