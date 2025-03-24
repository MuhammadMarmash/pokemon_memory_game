import { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import "../styles/CharacterCard.css";

function CharacterCard({ id }) {
    const [pokemonData, setPokemonData] = useState(null);
    const [animationClass, setAnimationClass] = useState("");
    const { clickedPokemons, handleClick } = useGameContext();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}/`
            );
            const data = await response.json();
            setPokemonData(data);
        }
        fetchData();
    }, [id]);

    const handleCardClick = () => {
        if (clickedPokemons.includes(id)) {
            setAnimationClass("wrong-click");
        } else {
            setAnimationClass("correct-click");
        }
        setTimeout(() => {
            handleClick(id);
            setAnimationClass(""); // Reset animation class after 500ms
        }, 500); // Delay the click handling to allow animation to play
    };

    return (
        <div
            className={`character-card ${animationClass}`}
            onClick={handleCardClick}
        >
            <div className="card-image-container">
                <img
                    src={
                        !pokemonData
                            ? "Loading..."
                            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`
                    }
                    alt={!pokemonData ? "Loading..." : pokemonData.name}
                    className="card-image"
                />
            </div>
            <div className="character-name">
                {!pokemonData ? "Loading..." : pokemonData.name}
            </div>
        </div>
    );
}

export default CharacterCard;
