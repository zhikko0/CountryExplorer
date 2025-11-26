import {Link} from 'react-router-dom'

export default function CountryGrid({countryList,backTo ='/'}) {
    if (!countryList ||countryList.length === 0) {
        return <p>It seems like there is nothing here</p>
    }
    return(
        <ul className='countries-grid'>
            {countryList.map(country =>(
                <li className='country-card' key={country.name}>
                    <Link to={`/countries/${country.name}`} state={{backTo}}>
                    <img src={country.flagPng} className='country-flag'/>
                    <div className='country-name'>{country.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}