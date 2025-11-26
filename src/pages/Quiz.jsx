import { useState } from "react";
import Setup from "../components/Setup.jsx";
import Play from "../components/Play.jsx";
import Finish from "../components/Finish.jsx";
import { fetchCountriesByRegion } from "../api/api.js";

export default function Quiz() {
  const [username, setUsername] = useState("");
  const [region, setRegion] = useState("europe");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const currentIndex = answers.length;
  const finished = questions.length > 0 && answers.length === questions.length;

  async function handleStartQuiz(e) {
    e.preventDefault();
    const data = await fetchCountriesByRegion(region);
    const shuffled = [...data].sort(() => Math.random() - 0.5).slice(0,15);
    setQuestions(shuffled);
    setAnswers([]);
  }

  if (!questions.length) {
    return (
      <Setup username={username} region={region} onUsernameChange={setUsername} onRegionChange={setRegion} onStartQuiz={handleStartQuiz}/>
    );
  }

  if (!finished) {
    const current = questions[currentIndex];
    return (
      <Play current={current} currentIndex={currentIndex} total={questions.length} onSubmitAnswer={(value) => setAnswers((prev) => [...prev, value])}/>
    );
  }

  return (
    <Finish username={username} region={region} questions={questions} answers={answers}/>
  );
}