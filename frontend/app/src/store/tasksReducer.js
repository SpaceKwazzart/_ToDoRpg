import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserTodos } from '../api/getUserTodos'
import { postUserTask } from '../api/postUserTask'
import { deleteUserTodo } from '../api/deleteUserTodo'

const initialState = {
    isLoading: false,
    array: [],
};

export const fetchTasksAction = createAsyncThunk(
    'tasks/fetchTasksAction',
    async function(_, { getState, rejectWithValue }) {
      const state = await getState();
    
      try {
        if (state.user.id !== -1) {
            const userTasks = await getUserTodos(state.user.id);
            if (userTasks !== null & userTasks !== undefined) {
                return userTasks; 
            } else {
                throw new Error('Bad value in response')
            }
          } else {
            throw new Error('Invalid user ID');
          }
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const postTaskAction = createAsyncThunk(
    'tasks/postTaskAction',
    async function(newTask, {dispatch, getState}) {
        const state = getState();

        const sendingData = {
            user: state.user.id,
            title: newTask.name,
        //    comment: newTask.text,
        }

        const savedTask = await postUserTask(state.user.id, sendingData)
        
        newTask = {
            id: savedTask.id,
            name: savedTask.title,
        }
        dispatch(addTask(newTask));
    }
)

export const deleteTodoAction = createAsyncThunk(
    'tasks/deleteTodoAction',
    async function(id, { getState, dispatch, rejectWithValue }) {
      const state = getState();
      try {
        const response = deleteUserTodo(state.user.id, id);
        dispatch(removeTask(id));
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  )

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.array.unshift(action.payload)
        },
        removeTask: (state, action) => {
            const newArray = state.array.filter(task => task.id !== action.payload)
            state.array = newArray
        }
    },
    extraReducers: {
        [fetchTasksAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchTasksAction.fulfilled]: (state, action) => {
            state.isLoading = false;
            const newTasks = action.payload.map(task => {
                return {
                    id: task.id,
                    name: task.title,
                    text: task.comment,
                }
            })
            state.array = newTasks;
        },
        [fetchTasksAction.rejected]: (state, action) => {
            state.isLoading = false;
            console.log("Bad block")
          },
        
        [postTaskAction.pending]: state => {
            state.isLoading = true;
        },
        [postTaskAction.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [postTaskAction.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
})

export const { addTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer