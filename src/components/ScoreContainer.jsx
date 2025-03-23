import "../styles/ScoreContainer.css";
function ScoreContainer(props) {
    return (
        <div className="score-container">
            <div className="current-score">
                Score: <span id="current-score">{props.score}</span>
            </div>
            <div className="best-score">
                Best score: <span id="best-score">{props.bestScore}</span>
            </div>
        </div>
    );
}
export default ScoreContainer;
