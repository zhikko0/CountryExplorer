import { configureStore } from "@reduxjs/toolkit"
import countriesReducer from './countriesSlice'
import countryDetailsReducer from './countryDetailsSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetails: countryDetailsReducer,
  }
});