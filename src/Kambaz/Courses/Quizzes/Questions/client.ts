// questions client to make deleteQuestion and updateQuestion
// createQuestion handled in Quiz Client 
// need questions reducer to bring in mutable state objects for questionsEditor 
// in questionsEditor.tsx bring in findQuestionsForQuiz to use on the quiz object that is passed in 

import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteQuestion = async (questionId: string) => {
    const response = await axiosWithCredentials.delete(`${QUESTIONS_API}/${questionId}`);
    return response.data;
};
export const updateQuestion = async (question: any) => {
    const { data } = await axiosWithCredentials.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
};
