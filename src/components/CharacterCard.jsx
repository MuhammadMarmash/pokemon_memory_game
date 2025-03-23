import { useEffect, useState } from "react";
import "../styles/CharacterCard.css";

function CharacterCard(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${props.id}/`
            );
            const data = await response.json();
            setPokemonData(data);
        }
        fetchData();
    }, [props.id]);
    return (
        <div
            className="character-card"
            onClick={() => props.handleClick(props.id)}
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
