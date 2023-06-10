import { createSlice } from "@reduxjs/toolkit";
import GROWTH_VALUE from '../consts'
import { produce } from 'immer';

const initialState = [
    
];



export const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill: (state, action) => {
            const newSkill = {
                id: state[state.length - 1] ? [state.length - 1].id + 1 : 0,
                name: action.payload,
                currentExp: 0,
                currentMax: 1,
                order: 1,
                level: 1,
              }  
            state.unshift(newSkill)
        },

        deleteSkill: (state, action) => {
            return state.filter(skill => skill.id !== action.payload)
        },

        addSkillExp: (state, action) => {
            return state.map(skill => {
              if (skill.id !== action.payload.id) {
                return skill;
              } else {
                let newExp = skill.currentExp + action.payload.exp;
                let updatedSkill = { ...skill }; // Создаем копию объекта skill
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
          }
    }
})

export const { addSkill, deleteSkill, addSkillExp } = skillSlice.actions

export default skillSlice.reducer