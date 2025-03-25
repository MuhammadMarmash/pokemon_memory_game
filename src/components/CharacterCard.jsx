import { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import "../styles/CharacterCard.css";

function CharacterCard({ id }) {
    const [pokemonData, setPokemonData] = useState(null);
    const [animationClass, setAnimationClass] = useState("");
    const { clickedPokemons, handleClick } = useGameContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
            mode: "cors",
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => {
                setPokemonData(data);
                setError(null);
            })
            .catch(() => {
                setError("Failed to load Pokémon data.");
            })
            .finally(() => {
                setLoading(false);
            });
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

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    if (error)
        return (
            <div className={`character-card ${animationClass}`}>
                <div className="card-image-container">
                    <div className="image-placeholder"></div>
                </div>
                <div className="character-name">{error}</div>
            </div>
        );
    if (loading)
        return (
            <div className={`character-card ${animationClass}`}>
                <div className="card-image-container">
                    <div className="image-placeholder"></div>
                </div>
                <div className="character-name">{"Loading..."}</div>
            </div>
        );

    return (
        <div
            className={`character-card ${animationClass}`}
            onClick={handleCardClick}
        >
            <div className="card-image-container">
                <div className="image-placeholder"></div>
                {pokemonData && (
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
                        alt={pokemonData.name + " image"}
                        className={`card-image ${
                            imageLoaded ? "loaded" : "loading"
                        }`}
                        onLoad={handleImageLoad}
                    />
                )}
            </div>
            <div className="character-name">{pokemonData?.name}</div>
        </div>
    );
}

export default CharacterCard;
