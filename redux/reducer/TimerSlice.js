import { createSlice } from "@reduxjs/toolkit";

export const TimerSlice=createSlice({
    name:'timer',
    initialState:{
        timers:[]
    },
    reducers:{
        addNewTimer:(state,action)=>{
            state.timers.push(action)
        }
        
    }
})