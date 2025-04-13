import { configureStore }
    from "@reduxjs/toolkit";
import modulesReducer
    from "./Courses/Modules/reducer";
import accountReducer
    from "./Account/reducer";
import assignmentsReducer
    from "./Courses/Assignments/reducer";
import coursesReducer
    from "./Courses/coursesReducer";
import enrollmentsReducer
    from "./enrollmentsReducer";
import quizzesReducer
    from "./Courses/Quizzes/reducer";
import questionsReducer
    from "./Courses/Quizzes/Questions/reducer";
import attemptsReducer
    from "./Courses/Quizzes/Attempts/reducer";


const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        coursesReducer,
        enrollmentsReducer,
        quizzesReducer,
        questionsReducer,
        attemptsReducer,
    },
});
export default store;
