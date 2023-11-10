import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isRTL:false
}


export const localizationSlice = createSlice({
    name:"localization",
    initialState,
    reducers: {
        setIsLocalization:(state,action)=>{
            state.isRTL = action.payload;
        }
    }

});

export const { setIsLocalization } = localizationSlice.actions;

export default localizationSlice.reducer;