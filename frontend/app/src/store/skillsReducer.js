import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GROWTH_VALUE from '../consts'
import { getUserSkills } from '../api/getUserSkills';
import { postUserSkill } from '../api/postUserSkill';
import { deleteUserSkill } from '../api/deleteUserSkill'

const initialState = {
  isLoading: false,
  array: [],
}

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async function(_, { getState, rejectWithValue }) {
    const state = await getState();

    try {
      if (state.user.id !== -1) {
        const userSkills = await getUserSkills(state.user.id);
        if (userSkills !== null & userSkills !== undefined) {
          return userSkills;
        }
        throw new Error("Bad request")
      } else {
        throw new Error('Invalid user ID');
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSkillAction = createAsyncThunk(
  'tasks/postSkillAction',
  async function(newSkill, {dispatch, getState}) {
      const state = getState();

      const sendingData = {
          user: state.user.id,
          title: newSkill,
      }
  
      const savedTask = await postUserSkill(state.user.id, sendingData)
      newSkill = {
          id: savedTask.id,
          name: savedTask.title,
        }
        dispatch(addSkill(newSkill));
  }
)

export const deleteSkillAction = createAsyncThunk(
  'tasks/deleteSkillAction',
  async function(id, { getState, dispatch, rejectWithValue }) {
    const state = getState();
    try {
      const response = deleteUserSkill(state.user.id, id);
      dispatch(deleteSkill(id));
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill: (state, action) => {
            const newSkill = {
                id: action.payload.id,
                name: action.payload.name,
                currentExp: 0,
                currentMax: 1,
                order: 1,
                level: 1,
              }  
            state.array.unshift(newSkill)
        },

        deleteSkill: (state, action) => {
            const newArray = state.array.filter(skill => skill.id !== action.payload)
            state.array = newArray
        },

        addSkillExp: (state, action) => {
            const newArray = state.array.map(skill => {
              if (skill.id !== action.payload.id) {
                return skill;
              } else {
                let newExp = skill.currentExp + action.payload.exp;
                let updatedSkill = { ...skill };
                while (newExp >= updatedSkill.currentMax) {
                  updatedSkill.currentExp = newExp - updatedSkill.currentMax;
                  updatedSkill.level += 1;
                  updatedSkill.currentMax *= GROWTH_VALUE;
                  newExp = updatedSkill.currentExp;
                }
                updatedSkill.currentExp = newExp;
                return updatedSkill;
              }
            });
            state.array = newArray
          }
    },
    extraReducers: {
      [fetchSkills.pending]: (state, action) => {
        state.isLoading = true;
        },
        
      [fetchSkills.fulfilled]: (state, action) => {
        state.isLoading = false;
        const newSkills = action.payload.map(skill => {
            return {
                id: skill.id,
                name: skill.title,
                level: skill.level,
                currentExp: skill.current_exp,
                currentMax: skill.current_max,
            }
        })
        state.array = newSkills;
      },

      [fetchSkills.rejected]: (state, action) => {
        state.isLoading = false;
        console.log("Error block")
      },

      [postSkillAction.pending]: (state, action) => {
        state.isLoading = true;
      },
      [postSkillAction.fulfilled]: (state, action) => {
        state.isLoading = false;
      },
      [postSkillAction.rejected]: (state, action) => {
        state.isLoading = false;
      },
    }
})

export const { addSkill, deleteSkill, addSkillExp } = skillSlice.actions

export default skillSlice.reducer