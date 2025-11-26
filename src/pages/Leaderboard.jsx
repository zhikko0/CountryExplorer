import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizScore } from "../storage/savedData";

export default function Leaderboard() {
  const [scoresByRegion, setScoresByRegion] = useState({});

  useEffect(() => {
    const allScores = getQuizScore();
    const grouped = {};

    allScores.forEach(entry => {
      const region = entry.region;
      if (!grouped[region]) grouped[region] = [];
      grouped[region].push(entry);
    });

    for (const region in grouped) {
      grouped[region].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    }

    setScoresByRegion(grouped);
  }, []);

  return (
    <main className="container">
      <h1>Leaderboard</h1>

      {Object.keys(scoresByRegion).length === 0 ? (
        <p className="leaderboard-empty">It seems there is nothing here, try playing at least once!</p>
      ) : (
        Object.keys(scoresByRegion).map(region => (
          <div key={region} className="region-section">
            <h2 className="region-title">{region}</h2>
            <ul className="leaderboard-list">
              {scoresByRegion[region].map((result, index) => (
                <li className="leaderboard-item" key={index}><strong>{result.username}</strong> — {result.score}/15</li>
              ))}
            </ul>
          </div>
        ))
      )}

      <Link to="/" className="btn btn-red">Back</Link>
    </main>
  );
}
