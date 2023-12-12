import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isSearchModal: false
}

const searchModalReducer = createSlice({
    name: 'searchModal',
    initialState: initState,
    reducers: {
        searchModal: (state, action)=>{
            state.isSearchModal = action.payload;
        }
    }
})

export default searchModalReducer.reducer;
export const {searchModal} = searchModalReducer.actions;
