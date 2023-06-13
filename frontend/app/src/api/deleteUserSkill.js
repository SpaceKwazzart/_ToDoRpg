import axios from "axios";
import { HOST } from "../consts";

export const deleteUserSkill = async (userId, skillId) => {
  try {
    await axios.delete(`http://${HOST}:8000/users/${userId}/skills/${skillId}`);
  } catch (error) {
    console.error(error.response.data);
  }
};
