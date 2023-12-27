import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
    //reducer: counterSlice.reducer if single reducer
     reducer: { counter: counterReducer, auth: authReducer } //we can use this map whenever there are muliple reducers.
});

export default store;