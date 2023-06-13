import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUser } from '../api/getUser'
import GROWTH_VALUE from '../consts'

const initialState = {
    isLoading: false,
    id: -1,
    isAuth: false,
    level: 'sign in for progress',
    currentExp: 0,
    currentMax: 1,
    avatar: "",
    totalTodo: 0,
}


export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async function(_, { getState, rejectWithValue }) {
    const state = await getState();
    try {
      if (state.user.id !== -1){
        const userData = await getUser(state.user.id);
        if (userData !== null & userData !== undefined) {
          return userData;
        }
        throw new Error('Bad user response');
      } else {
        throw new Error('Invalid user ID');
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuth = true
            state.id = action.payload
        },

        signOut: (state) => {
            state.isAuth = false
            state.id = -1
        },

        addExp: (state, action) => {
            let newExp = state.currentExp + action.payload;
            let updatedState = { ...state };
          
            while (newExp >= updatedState.currentMax) {
              updatedState = {
                ...updatedState,
                currentMax: updatedState.currentMax * GROWTH_VALUE,
                level: updatedState.level + 1,
                currentExp: newExp - updatedState.currentMax,
              };
              newExp = updatedState.currentExp;
            }
          
            return {
              ...updatedState,
              currentExp: newExp,
            };
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
        }
      },
      [fetchUser.rejected]: (state, action) => {
        state.isLoading = false
      },
    }
})



export const { signIn, signOut, addExp } = userSlice.actions;
export default userSlice.reducer;