import { useGameContext } from "../context/GameContext";
import "../styles/ScoreContainer.css";

function ScoreContainer() {
    const { score, bestScore } = useGameContext();
    return (
        <div className="score-container">
            <div className="current-score">
                Score: <span id="current-score">{score}</span>
            </div>
            <div className="best-score">
                Best score: <span id="best-score">{bestScore}</span>
            </div>
        </div>
    );
}

export default ScoreContainer;
