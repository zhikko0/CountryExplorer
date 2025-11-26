import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSavedCountries } from "../storage/savedData.js";
import { fetchCountryByName  } from "../api/api.js";

export default function Collection() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function load() {
      const names = getSavedCountries();
      if (!names.length) {
        setCountries([]);
        return;
      }
      const data = await Promise.all(names.map((country) => fetchCountryByName (country)));
      setCountries(data);
    }
    load();
  }, []);

  if (countries.length === 0) {
    return (
      <main className="container">
        <h1>Your collection is empty.</h1>
        <p>You don't have any favorite countries yet.</p>
        <Link to="/" className="btn btn-red">Back</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>These are the countries you have added to your collection.</h1>

      <ul className="countries-grid">{countries.map((country) => (
          <li className="country-card" key={country.name}>
            <Link to={`/countries/${country.name}`} state={{ backTo: "/collection" }}>
              <img src={country.flagPng} className="country-flag" />
              <div className="country-name">{country.name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="btn btn-red">Back</Link>
    </main>
  );
}