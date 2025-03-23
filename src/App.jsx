import { useState } from "react";
import "./styles/index.css";
import CharacterCard from "./components/CharacterCard";
import ScoreContainer from "./components/ScoreContainer";
function App() {
    const [score, setScore] = useState(0);
    let characters = [
        {
            name: "bulbasaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            clicked: false,
        },
        {
            name: "ivysaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            clicked: false,
        },
        {
            name: "venusaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            clicked: false,
        },
        {
            name: "charmander",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            clicked: false,
        },
        {
            name: "charmeleon",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            clicked: false,
        },
        {
            name: "charizard",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            clicked: false,
        },
        {
            name: "squirtle",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            clicked: false,
        },
        {
            name: "wartortle",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            clicked: false,
        },
        {
            name: "blastoise",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            clicked: false,
        },
        {
            name: "caterpie",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            clicked: false,
        },
        {
            name: "metapod",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            clicked: false,
        },
        {
            name: "butterfree",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            clicked: false,
        },
    ];
    return (
        <div class="game-container">
            <header class="game-header">
                <h1 class="game-title">Memory Game</h1>
                <ScoreContainer />
            </header>

            <div class="game-instructions">
                <p>
                    Get points by clicking on a Pokémon but don't click on any
                    more than once!
                </p>
            </div>

            <div class="cards-grid">
                <CharacterCard />
            </div>
        </div>
    );
}

export default App;
