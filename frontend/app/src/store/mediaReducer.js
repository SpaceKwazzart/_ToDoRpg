import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang: "ru",
    isDesktop: true,
}

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
        },
        setDisplayType: (state, action) => {
            state.isDesktop = action.payload;
        }
    }
})


export const { setLang, setDisplayType } = mediaSlice.actions

export default mediaSlice.reducer