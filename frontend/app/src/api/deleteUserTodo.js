import axios from "axios";
import { HOST, PORT } from "../consts";

export const deleteUserTodo = async (userId, todoId) => {
  try {
    const response = await axios.delete(`http://${HOST}:${PORT}/api/users/${userId}/todos/${todoId}`);
    return response;
  } catch (error) {
    console.error(error.response.data);
  }
};
