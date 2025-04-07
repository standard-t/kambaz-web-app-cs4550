import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {


        setQuizzes: (state, { payload: quizzes }) => {
            state.quizzes = quizzes;
        },




        addQuiz: (state, { payload: quiz }) => {
            state.quizzes = [...state.quizzes,
                quiz] as any;
        },


        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId);
        },

        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz : q) as any;
        },


        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quizId ? { ...q, editing: true }
                    : q) as any;
        },
    },
});

export const { setQuizzes, addQuiz, deleteQuiz,
    updateQuiz, editQuiz } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;
