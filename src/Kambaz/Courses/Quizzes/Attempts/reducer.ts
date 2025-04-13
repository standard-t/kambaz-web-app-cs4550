import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    attempts: [],
};
const attemptsSlice = createSlice({
    name: "attempts",
    initialState,
    reducers: {


        setAttempts: (state, { payload: attempts }) => {
            state.attempts = attempts;
        },




        addAttempt: (state, { payload: attempt }) => {
            state.attempts = [...state.attempts,
                attempt] as any;
        },


        deleteAttempt: (state, { payload: attemptId }) => {
            state.attempts = state.attempts.filter(
                (a: any) => a._id !== attemptId);
        },

        updateAttempt: (state, { payload: attempt }) => {
            state.attempts = state.attempts.map((a: any) =>
                a._id === attempt._id ? attempt : a) as any;
        },



    },
});

export const { setAttempts, addAttempt, deleteAttempt,
    updateAttempt } =
    attemptsSlice.actions;
export default attemptsSlice.reducer;