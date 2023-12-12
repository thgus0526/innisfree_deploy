import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isShoppingBasketModal: false
}

const shoppingBasketModalReducer = createSlice({
    name: 'shoppingBasketModal',
    initialState: initState,
    reducers: {
        shoppingBasketModal: (state, action)=>{
            state.isShoppingBasketModal = action.payload;
        }
    }
})

export default shoppingBasketModalReducer.reducer;
export const {shoppingBasketModal} = shoppingBasketModalReducer.actions;
