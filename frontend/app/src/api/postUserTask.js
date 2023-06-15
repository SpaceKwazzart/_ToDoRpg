import axios from "axios"
import { HOST, PORT } from "../consts";

export const postUserTask = async (userId, data) => {
    try {
        const response = await axios.post(`http://${HOST}:${PORT}/api/users/${userId}/todos/`,
        data);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
    };
    