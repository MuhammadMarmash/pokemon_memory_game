import { useState } from "react";
import "./styles/index.css";
import CharacterCard from "./components/CharacterCard";
import ScoreContainer from "./components/ScoreContainer";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const newId = () => {
        return Math.floor(Math.random() * 1025) + 1;
    };

    const generateNewPokemons = () => {
        let pokemonsRandomId2 = new Set();
        while (pokemonsRandomId2.size < 15) {
            pokemonsRandomId2.add(newId());
        }
        return Array.from(pokemonsRandomId2);
    };

    const [pokemonsRandomId, setPokemonsRandomId] = useState(
        generateNewPokemons()
    );
    const [clickedPokemons, setClickedPokemons] = useState([]);

    const shuffle = (array) => {
        let temp = [...array];
        let currentIndex = temp.length;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [temp[currentIndex], temp[randomIndex]] = [
                temp[randomIndex],
                temp[currentIndex],
            ];
        }
        return temp;
    };

    const handleClick = (id) => {
        if (clickedPokemons.includes(id)) {
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
            setClickedPokemons([]);
            setPokemonsRandomId(generateNewPokemons());
        } else {
            setClickedPokemons([...clickedPokemons, id]);
            setScore(score + 1);
            setPokemonsRandomId(shuffle(pokemonsRandomId));
        }
    };

    return (
        <div className="game-container">
            <header className="game-header">
                <h1 className="game-title">Memory Game</h1>
                <ScoreContainer score={score} bestScore={bestScore} />
            </header>

            <div className="game-instructions">
                <p>
                    Get points by clicking on a Pokémon but don't click on any
                    more than once!
                </p>
            </div>
            <div className="cards-grid">
                {pokemonsRandomId.map((id) => (
                    <CharacterCard id={id} key={id} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
}

export default App;
