import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isHpUpdate: false
}

const hpUpdateReducer = createSlice({
    name: 'hpUpdateModal',
    initialState: initState,
    reducers: {
        hpUpdateModal: (state, action)=>{
            state.isHpUpdate = action.payload;
        }
    }
})

export default hpUpdateReducer.reducer;
export const {hpUpdateModal} = hpUpdateReducer.actions;
