import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isHpUpdateNumber: ''
}

const hpUpdateNumberReducer = createSlice({
    name: 'isHpUpdateNumber',
    initialState: initState,
    reducers: {
        hpUpdateNumber: (state, action)=>{
            state.isHpUpdateNumber = action.payload;
        }
    }
})

export default hpUpdateNumberReducer.reducer;
export const {hpUpdateNumber} = hpUpdateNumberReducer.actions;
