import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import ControllerSlice from './reducer/ControllerSlice';

export default configureStore({
reducer:{
    controller:ControllerSlice
}
})