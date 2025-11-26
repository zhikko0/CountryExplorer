export default function RegionSelector ({ selectedRegion, onRegionChange}) {
    return (
        <div>
            <label className="select" htmlFor="select-region">Select a region:</label>
            <select className="select" id="select-region" value={selectedRegion} onChange={onRegionChange}>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}