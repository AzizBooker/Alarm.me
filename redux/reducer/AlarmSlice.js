import { createSlice } from "@reduxjs/toolkit";

export const AlarmSlice=createSlice({
    name:'alarm',
    initialState:{
        alarms:[]
    },
    reducers:{
        addNewAlarm:(state,action)=>{
            state.alarms.push(action)
        }
        
    }
})