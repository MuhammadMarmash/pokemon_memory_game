import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedPokemons, setClickedPokemons] = useState([]);
    const [pokemonsRandomId, setPokemonsRandomId] = useState(
        generateNewPokemons()
    );

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
        <GameContext.Provider
            value={{
                score,
                bestScore,
                clickedPokemons,
                pokemonsRandomId,
                handleClick,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

const generateNewPokemons = () => {
    let pokemonsRandomId2 = new Set();
    while (pokemonsRandomId2.size < 15) {
        pokemonsRandomId2.add(Math.floor(Math.random() * 1025) + 1);
    }
    return Array.from(pokemonsRandomId2);
};

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
