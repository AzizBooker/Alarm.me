import { createSlice } from "@reduxjs/toolkit";

export const CountdownSlice=createSlice({
    name:'countdown',
    initialState:{
        countdowns:[]
    },
    reducers:{
        addNewCountdown:(state,action)=>{
            state.countdowns.push(action)
        }
        
    }
})