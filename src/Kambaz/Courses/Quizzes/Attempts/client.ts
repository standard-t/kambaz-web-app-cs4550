import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteAttempt = async (attemptId: string) => {
    const response = await axiosWithCredentials.delete(`${ATTEMPTS_API}/${attemptId}`);
    return response.data;
};
export const updateAttempt = async (attempt: any) => {
    const { data } = await axiosWithCredentials.put(`${ATTEMPTS_API}/${attempt._id}`, attempt);
    return data;
};
