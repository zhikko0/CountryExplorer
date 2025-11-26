import { Link } from "react-router-dom";
function Setup({ username, region, onUsernameChange, onRegionChange, onStartQuiz }) {
  return (
    <main className="container">
    <form onSubmit={onStartQuiz}>
      <h1>Guess the country by its flag</h1>
      <input className="select" type="text" placeholder="Put your name here" required value={username}
        onChange={(question) => onUsernameChange(question.target.value)} />
      <select className="select" value={region} onChange={(question) => onRegionChange(question.target.value)}>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <button className="btn btn-purple" type="submit">Start</button>
    </form>
    <Link to="/" className="btn btn-red">Back</Link>
    </main>
    
  );
}

export default Setup;