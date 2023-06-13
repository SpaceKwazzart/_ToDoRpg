import axios from "axios";
import { HOST } from "../consts";

export const deleteUserTodo = async (userId, todoId) => {
  try {
    await axios.delete(`http://${HOST}:8000/users/${userId}/todos/${todoId}`);
  } catch (error) {
    console.error(error.response.data);
  }
};
