import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isName:'',
    isHp:'',
    isBirthYear:'',
    isBirthMonth:'',
    isBirthDate:''
}

const bindingReducer = createSlice ({
    name: 'binding',
    initialState: initState,
    reducers: {
        binding: (state, action)=> {
            state.isName = action.payload.isName;
            state.isHp = action.payload.isHp;
            state.isBirthYear = action.payload.isBirthYear;
            state.isBirthMonth = action.payload.isBirthMonth;
            state.isBirthDate = action.payload.isBirthDate;
        }
    }    
});

export default bindingReducer.reducer;
export const { binding } = bindingReducer.actions;