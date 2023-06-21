import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userAsyncActions';

const userId = localStorage.getItem('access_token') 
                       ? Number(JSON.parse(atob(localStorage.getItem('access_token').split(".")[1])).user_id)
                       : -1

const isAuth = userId === -1 ? false : true

const initialState = {
    isLoading: false,
    id: userId,
    isAuth: isAuth,
    level: 'sign in for progress',
    currentExp: 0,
    currentMax: 1,
    avatar: "",
    totalTodo: 0,
    username: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuth = true;
            state.id = action.payload;
        },

        signOut: (state) => {
            state.isAuth = false;
            state.id = -1;
        },

        addExp: (state, action) => {
            const newState = {
              ...state,
              level: action.payload.level,
              totalTodo: action.payload.total_todo,
              currentExp: action.payload.current_exp,
              currentMax: action.payload.current_max,
            }
            return newState;
          }
    },
    extraReducers: {
      [fetchUser.pending]: (state, action) => {
        state.isLoading = true;
      },
      
      [fetchUser.fulfilled]: (state, action) => {
        return {
          ...state,
          isLoading: false,
          level: action.payload.level,
          currentExp: action.payload.current_exp,
          currentMax: action.payload.current_max,
          avatar: action.payload.avatar,
          totalTodo: action.payload.total_todo,
          profileid: action.payload.id,
          username: action.payload.username,
        }
      },
      [fetchUser.rejected]: (state, action) => {
        state.isLoading = false
      },
    }
})



export const { signIn, signOut, addExp, setUserId } = userSlice.actions;
export default userSlice.reducer;