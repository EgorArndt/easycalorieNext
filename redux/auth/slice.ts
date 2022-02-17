import { createSlice } from "@reduxjs/toolkit"

const googleAuthSlice = createSlice({
    name: 'isSignedIn',
    initialState: null as boolean | null,
    reducers: {
        signIn: () => true,
        signOut: () => false 
    }
})  

export const { signIn, signOut } = googleAuthSlice.actions
export default googleAuthSlice.reducer