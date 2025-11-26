import axios from "axios";

const API = 'https://restcountries.com/v3.1'
const FIELDS = 'name,flags,population,currencies,maps,officialName'

export async function fetchCountriesByRegion(selectedRegion) {
    const {data} = await axios.get(`${API}/region/${selectedRegion}?fields=name,flags`)

    return data.map(country => ({
        name: country.name.common,
        flagPng: country.flags.png
    }))
}

export async function fetchCountryByName(countryName) {
    const {data}= await axios.get(`${API}/name/${encodeURIComponent(countryName)}?fullText=true&fields=${FIELDS}`)
    const country = data[0]
    return{
        name: country.name.common,
        officialName: country.name.official,
        flagPng: country.flags.png,
        population: country.population,
        currency: country.currencies ? Object.values(country.currencies)[0].name: '',
        mapsUrl: country.maps.googleMaps
    }
}