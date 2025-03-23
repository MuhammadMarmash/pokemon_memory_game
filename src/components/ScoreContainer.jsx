import "../styles/ScoreContainer.css";
function ScoreContainer() {
    return (
        <div class="score-container">
            <div class="current-score">
                Score: <span id="current-score">3</span>
            </div>
            <div class="best-score">
                Best score: <span id="best-score">10</span>
            </div>
        </div>
    );
}
export default ScoreContainer;
