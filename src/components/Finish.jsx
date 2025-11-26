import { useEffect } from "react";
import { Link } from "react-router-dom";
import { saveQuizScore } from "../storage/savedData.js";

function Finish({ username, region, questions, answers }) {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === questions[i].name) score++;
  }

  useEffect(() => {
    saveQuizScore({ username, region, score });
  }, [username, region, score]);

  return (
    <main className="container">
      <h1>Results</h1>
      <p>{username}, you scored {score} points of {questions.length}.</p>
      <Link to="/" className="btn btn-red">Back</Link>
    </main>
  );
}

export default Finish;