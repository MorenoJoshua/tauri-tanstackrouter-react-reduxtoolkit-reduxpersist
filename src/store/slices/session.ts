import {createSlice} from "@reduxjs/toolkit";

export type SessionState = {
    token: string | null;
    user: string | null;
}
export const sessionInitialState:SessionState = {
    token: '',
    user: '',
};
const sessionSlice = createSlice({
    name: 'session',
    initialState: sessionInitialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
    },
});

export const {setToken, setUser} = sessionSlice.actions;
export default sessionSlice;
