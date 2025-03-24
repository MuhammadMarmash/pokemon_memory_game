import { GameProvider, useGameContext } from "./context/GameContext";
import CharacterCard from "./components/CharacterCard";
import ScoreContainer from "./components/ScoreContainer";
import "./styles/index.css";

function App() {
    return (
        <GameProvider>
            <div className="game-container">
                <header className="game-header">
                    <h1 className="game-title">Memory Game</h1>
                    <ScoreContainer />
                </header>
                <div className="game-instructions">
                    <p>
                        Get points by clicking on a Pokémon but don't click on
                        any more than once!
                    </p>
                </div>
                <div className="cards-grid">
                    <CharacterCards />
                </div>
            </div>
        </GameProvider>
    );
}

const CharacterCards = () => {
    const { pokemonsRandomId } = useGameContext();
    return (
        <>
            {pokemonsRandomId.map((id) => (
                <CharacterCard id={id} key={id} />
            ))}
        </>
    );
};

export default App;
