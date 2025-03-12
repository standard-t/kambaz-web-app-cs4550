import { createSlice } from "@reduxjs/toolkit";
import db from "./Database";
const initialState = {
    enrollments: db.enrollments,
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = [...state.enrollments,
            { ...enrollment, _id: Math.random().toString() }] as any;
        },
        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e._id !== enrollmentId);
        },
    },
});

export const { addEnrollment, deleteEnrollment } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
