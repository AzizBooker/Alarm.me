import { createSlice } from "@reduxjs/toolkit";

export const StopwatchSlice=createSlice({
    name:'stopwatch',
    initialState:{
        stopwatchs:[]
    },
    reducers:{
        addNewStopwatch:(state,action)=>{
            state.stopwatchs.push(action)
        }
        
    }
})