import axios from "axios"
import { HOST, PORT } from "../consts";

export const postSignOut = async () => {
    try {
        const response = await axios.post(
            `http://${HOST}:${PORT}/api/logout/`,
            {
                refresh_token: localStorage.getItem('refresh_token'),
            }
        );
        return response;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
    };
    