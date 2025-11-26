import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRegion: 'europe',
    countryList: [],
    fetchStatus: 'loading',
    fetchErrorMessage: null
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setSelectedRegion(state, action){
            state.selectedRegion = action.payload
        },
        setCountryList(state, action){
            state.countryList = action.payload
        },
        setFetchStatus(state, action){
            state.fetchStatus = action.payload
        },
        setFetchErrorMessage(state, action){
            state.fetchErrorMessage = action.payload
        }
    }
})

export const { setSelectedRegion,setCountryList,setFetchErrorMessage,setFetchStatus} = countriesSlice.actions;

export default countriesSlice.reducer