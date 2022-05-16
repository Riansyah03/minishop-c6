import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = null

try {
    const token = localStorage.getItem('minishopAccessToken')
    const userData = jwtDecode(token)
    initialState = userData
} catch {

}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: initialState
    },
    reducers: {
        addUser: (state, action) => {
            // Action.payload: userData
            state.data = {...action.payload.userData}
        },
        removeUser: (state) => {
            state.data = null
        }
    }
})

export default userSlice