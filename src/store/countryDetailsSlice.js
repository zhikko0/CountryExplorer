import { createSlice } from "@reduxjs/toolkit";

const countryDetailsSlice = createSlice({
    name:'countryDetails',
    initialState: {
        detailsByCountryName: {}
    },
    reducers:{
        setCountryDetails(state,action){
            const country = action.payload
            state.detailsByCountryName[country.name]= country
        }
    }
})

export const {setCountryDetails} =countryDetailsSlice.actions
export default countryDetailsSlice.reducer