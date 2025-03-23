import "../styles/CharacterCard.css";
function CharacterCard() {
    return (
        <div class="character-card">
            <div class="card-image-container">
                <img
                    src="placeholder-pikachu.jpg"
                    alt="Pikachu"
                    class="card-image"
                />
            </div>
            <div class="character-name">Pikachu</div>
        </div>
    );
}
export default CharacterCard;
