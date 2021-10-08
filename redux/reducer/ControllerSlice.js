import { createSlice } from "@reduxjs/toolkit";

export const ControllerSlice=createSlice({
    name:"controller",
    initialState:{
        isActive:false,
        inactivityTime:10000, //Time until screen is considred inactive in milliseconds 
    },
    reducers:{
        setIsActive: (state,payload)=>{
            state.isActive=payload
        },
        setInactivityTime:(state,payload)=>{
            state.inactivityTime=payload
        }
    }

})


export const {toggleIsActiveFalse,toggleIsActiveTrue}=ControllerSlice.actions


export default ControllerSlice.reducer

