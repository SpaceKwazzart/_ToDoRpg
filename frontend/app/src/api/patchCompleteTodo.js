import axios from "axios";
import { HOST } from "../consts";

export const patchCompleteTodo = async (userId, skillId, newExpirience) => {
  try {
    await axios.patch(
        `http://${HOST}:8000/users/${userId}/skills/${skillId}`,
         { new_expirience: newExpirience });
  } catch (error) {
    console.error(error.response.data);
  }
};
