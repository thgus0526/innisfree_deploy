import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isMoreViewModal: false
}

const moreViewModalReducer = createSlice({
    name: 'moreViewModal',
    initialState: initState,
    reducers: {
        moreViewModal : (state, action)=>{
            state.isMoreViewModal = action.payload
        }
    }
})

export default moreViewModalReducer.reducer;
export const { moreViewModal } = moreViewModalReducer.actions;