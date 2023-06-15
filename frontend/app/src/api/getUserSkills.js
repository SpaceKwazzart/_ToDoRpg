import axios from "axios"
import { HOST, PORT } from "../consts";

export const getUserSkills = async (userId) => {
    try {
        const response = await axios.get(`http://${HOST}:${PORT}/api/users/${userId}/skills`);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
    };
    