import { createSlice } from '@reduxjs/toolkit'
import GROWTH_VALUE from '../consts'

const initialState = {
    id: 0,
    isAuth: false,
    level: 1,
    currentExp: 0,
    currentMax: 1,
}

export const userSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuth = true
        },

        signOut: (state) => {
            state.isAuth = false
        },

        addExp: (state, action) => {
            let newExp = state.currentExp + action.payload;
            let updatedState = { ...state }; // Создаем копию объекта state
          
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
    }
})



export const { signIn, signOut, addExp } = userSlice.actions;
export default userSlice.reducer;