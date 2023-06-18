import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../api/getUser'

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async function(_, { getState, rejectWithValue }) {
      const state = await getState();
      try {
        if (state.user.id !== -1) {
          const userData = await getUser(state.user.id);
          if (userData !== null & userData !== undefined) {
            console.log("User Data", userData);
            return userData;
          }
          throw new Error('Bad user response');
        } else {
          throw new Error('Invalid user ID (no auth)');
        }
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
