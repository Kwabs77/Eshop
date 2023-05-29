import React from 'react';
import { configureStore } from '@reduxjs/toolkit';



import userReducer from '../redux/userSlice/UserSlice.js'
import {logger} from 'redux-logger'

export const store = configureStore({

    reducer:{
        user:userReducer
    },
    middleware:(getDefaultMidlleware)=> getDefaultMidlleware().concat(logger)
    
})