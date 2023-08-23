import { createSlice } from "@reduxjs/toolkit"
export const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        loggedIn: false
    },
    reducers: {
        login: (state) => { console.log("in login action");return {loggedIn: true}} ,
            
        
        logout: (state) => {
            console.log("in logout action")
            return {loggedIn: false}
        }
    }
})

export const {login} = loggedSlice.actions;
export const {logout} = loggedSlice.actions;

export default loggedSlice.reducer;