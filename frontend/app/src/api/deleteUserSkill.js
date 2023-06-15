import axios from "axios";
import { HOST, PORT } from "../consts";

export const deleteUserSkill = async (userId, skillId) => {
  try {
    const response = await axios.delete(`http://${HOST}:${PORT}/api/users/${userId}/skills/${skillId}`);
    return response;
  } catch (error) {
    console.error(error.response.data);
  }
};
