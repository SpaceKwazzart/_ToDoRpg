import axios from "axios";
import { HOST, PORT } from "../consts";

export const patchCompleteTodo = async (userId, skillId, newExpirience) => {
  try {
    console.log("patchCompleteTodo");
    const response = await axios.patch(
        `http://${HOST}:${PORT}/api/users/${userId}/skills/${skillId}`,
         { new_expirience: newExpirience });
    return response;
  } catch (error) {
    console.error(error.response.data);
  }
};
