import { useEffect, useState } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCountryDetails } from "../store/countryDetailsSlice"
import { fetchCountryByName } from "../api/api"
import { getSavedCountries, saveCountry, removeCountry } from "../storage/savedData"

export default function InfoCountry() {
  const { countryName } = useParams()
  const location = useLocation()
  const backTo = location.state?.backTo || "/"

  const dispatch = useDispatch()
  const country =
    useSelector(state => state.countryDetails.detailsByCountryName[countryName]) || null

  const [isSaved, setIsSaved] = useState(() =>
    getSavedCountries().includes(countryName)
  )

  useEffect(() => {
    if (!country) {
      fetchCountryByName(countryName)
        .then(data => dispatch(setCountryDetails(data)))
        .catch(err => console.error("Error loading country:", err))
    }
  }, [countryName, country, dispatch])

  useEffect(() => {
    setIsSaved(getSavedCountries().includes(countryName))
  }, [countryName])

  function handleToggleSave() {
    if (!country) return
    if (isSaved) {
      removeCountry(country.name)
      setIsSaved(false)
    } else {
      saveCountry(country.name)
      setIsSaved(true)
    }
  }

  if (!country) {
    return (
      <main className="container">
        <h1>Loading data...</h1>
        <Link to={backTo} className="btn btn-red">Back</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <h1>Details about <span>{country.name}</span></h1>
      <div className="asdasd">
        <img src={country.flagPng} />
        <h2>{country.officialName}</h2>

        <p><strong>Currency:</strong> {country.currency}</p>
        <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>

        <a href={country.mapsUrl} target="_blank" rel="noopener noreferrer">See on Google Maps</a>
        <br />
        <button className={isSaved ? "btn btn-red" : "btn btn-purple"} onClick={handleToggleSave}> {isSaved ? "Remove Country" : "Save Country"}</button>
      </div>

      <Link to={backTo} className="btn btn-red">Back</Link>
    </main>
  )
}
