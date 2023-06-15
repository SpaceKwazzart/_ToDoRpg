import axios from "axios"
import { HOST, PORT } from "../consts";

export const getUser = async (userId) => {
    try {
        const response = await axios.get(`http://${HOST}:${PORT}/api/users/${userId}`,
        // {headers: {
        //     'Content-Type': 'application/json',
        //     withCredentials: true,}}
            );
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
    };