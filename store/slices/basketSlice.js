import {createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[]
}
const basketSlice=createSlice({
    name:'basket',
    initialState:initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items=[...state.items,action.payload]
        },
        removeFromBasket:(state)=>{
            state.value-=1;
        }
    }
})

export const counterActions=basketSlice.actions;
export default basketSlice;