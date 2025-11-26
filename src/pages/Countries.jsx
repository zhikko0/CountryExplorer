import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRegion, setCountryList, setFetchStatus} from '../store/countriesSlice'
import { fetchCountriesByRegion } from '../api/api'
import RegionSelector from '../components/RegionSelector'
import CountryGrid from '../components/CountryGrid'

export default function Countries() {
  const dispatch = useDispatch()

  const selectedRegion = useSelector(state => state.countries.selectedRegion)
  const countryList = useSelector(state => state.countries.countryList)
  const fetchStatus = useSelector(state => state.countries.fetchStatus)

  useEffect(() => {
    dispatch(setFetchStatus('loading'))
    fetchCountriesByRegion(selectedRegion)
      .then(countries => {
        dispatch(setCountryList(countries))
        dispatch(setFetchStatus('succeeded'))
      })
      .catch(() => dispatch(setFetchStatus('failed')))
  }, [])

  function handleRegionChange(event) {
    const nextRegion = event.target.value
    dispatch(setSelectedRegion(nextRegion))
    dispatch(setFetchStatus('loading'))
    fetchCountriesByRegion(nextRegion)
      .then(countries => {
        dispatch(setCountryList(countries))
        dispatch(setFetchStatus('succeeded'))
      })
      .catch(() => dispatch(setFetchStatus('failed')))
  }

  return (
    <main className="container">
      <h1>Countries by Region</h1>

      <RegionSelector selectedRegion={selectedRegion} onRegionChange={handleRegionChange}/>

      {fetchStatus === 'loading' && <p>Loading data…</p>}
      {fetchStatus === 'failed' && <p>An error has occurred.</p>}

      <CountryGrid countryList={countryList} backTo='/countries'/>

      <Link to="/" className="btn btn-red">Back</Link>
    </main>
  )
}