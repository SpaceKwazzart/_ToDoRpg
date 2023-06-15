import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserSkills } from '../api/getUserSkills';
import { postUserSkill } from '../api/postUserSkill';
import { deleteUserSkill } from '../api/deleteUserSkill'
import { patchCompleteTodo } from '../api/patchCompleteTodo'
import { addExp } from "./userReducer.js";
import { deleteTodoAction } from "./tasksReducer";

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
  'skills/postSkillAction',
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
  'skills/deleteSkillAction',
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

export const completeTaskAction = createAsyncThunk(
  'skills/completeTaskAction',
  async function({ taskId, skillId, newExpirience }, { getState, dispatch, rejectWithValue }) {
    const state = getState();
    console.log("I am in complete");
    try {
      const response = await patchCompleteTodo(state.user.id, skillId, newExpirience);
      
      if (response.statusText === "OK") {
        const skill = response.data["skill"]
        const user = response.data["user"]
        console.log(skill, user);
        dispatch(addSkillExp(skill));
        dispatch(addExp(user));
        await dispatch(deleteTodoAction(taskId));
      } else {
        throw new Error("Bad response");
      }
    } catch (error) {
      return rejectWithValue(error.message);
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
            console.log("1", state.array);
            const newArray = state.array.map(skill => {
              if (skill.id !== action.payload.id) {
                return skill;
              } else {
                return {
                  ...action.payload,
                  id: action.payload.id,
                  currentExp: action.payload.current_exp,
                  currentMax: action.payload.current_max,
                }
              }
            });
            state.array = newArray;
            console.log(state.array);
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