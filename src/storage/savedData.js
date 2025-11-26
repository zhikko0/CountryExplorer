export function getSavedCountries(){
    const data = localStorage.getItem("savedCountries");
    return data ? JSON.parse(data) : [];
}
export function saveCountry(countryName){
    const thisCountry = getSavedCountries();
    if (!thisCountry.includes(countryName)) {
        const updatedList = [...thisCountry, countryName];
        localStorage.setItem("savedCountries", JSON.stringify(updatedList));
        }
}
export function removeCountry(countryName){
    const thisCountry = new Set(getSavedCountries());
        thisCountry.delete(countryName)
        localStorage.setItem("savedCountries", JSON.stringify([...thisCountry]));
}
export function getQuizScore() {
    const data = localStorage.getItem("quizScore");
    return data ? JSON.parse(data) : [];
}
export function saveQuizScore(result) {
    const prev = getQuizScore();
    const updated = [...prev, result];
    localStorage.setItem("quizScore", JSON.stringify(updated));
}