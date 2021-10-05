import { configureStore } from '@reduxjs/toolkit'
import ControllerReducer from './reducer/controller.reducer'

const reduxStore=configureStore({reducer:ControllerReducer})


export default reduxStore;