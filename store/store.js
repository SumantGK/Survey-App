import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import surveySlice from './surveySlice';

const combineReducer = combineReducers({
  surveySlice,
});

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
  });
export const wrapper = createWrapper(makeStore);
