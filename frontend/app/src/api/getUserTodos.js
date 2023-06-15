import axios from "axios";
import { HOST, PORT } from "../consts";

export const getUserTodos = async (userId) => {
    try {
        const response = await axios.get(`http://${HOST}:${PORT}/api/users/${userId}/todos`);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
    };
    