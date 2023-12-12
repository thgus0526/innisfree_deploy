import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isShoppingModal: false
}

const shoppingModalReducer = createSlice({
    name: 'shoppingModal',
    initialState: initState,
    reducers: {
        shoppingModal: (state, action)=>{
            state.isShoppingModal = action.payload;
        }
    }
})

export default shoppingModalReducer.reducer;
export const {shoppingModal} = shoppingModalReducer.actions;
