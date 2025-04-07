import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
};
export const updateAssignment = async (quiz: any) => {
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};