import { Link } from "react-router-dom";
import { useState } from "react";

export default function Play({ current, currentIndex, total, onSubmitAnswer }) {
  const [player, setplayer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!player) return;
    onSubmitAnswer(player);
    setplayer("");
  }

  return (
    <main className=" container">
      <h2>Which country does this flag belong to?</h2>

      <img src={current.flagPng} style={{height:300}} />
      <p style={{margin: 0}}>{currentIndex + 1} of {total}</p>
      <form onSubmit={handleSubmit}>
        <input value={player} onChange={(e) => setplayer(e.target.value)}/>
        <button className="btn btn-purple" type="submit"> {currentIndex +1 === total  ? "Finish" : "Next"} </button>
      </form>
       <Link to="/" className="btn btn-red">Back</Link>
    </main>
  );
}