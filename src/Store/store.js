import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../Components/Reducer/navSlice'
import nameReducer from '../Components/Reducer/nameSlice'
import bodyReducer from '../Components/Reducer/bodySlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
    name: nameReducer,
    body: bodyReducer
  }
})