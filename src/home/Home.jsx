import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch la lista para que muestre solo 150
    // variable de endpoint variable
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(pokemon => pokemon.name);
        setPokemonList(names);
      })
      .catch(error => console.error("Error fetching Pokemon names:", error));
  }, []);

  const irAPersonajes = () => {
    if (selectedPokemon) {
      navigate(`/personajes/${selectedPokemon}`);
    } else {
      // error para cuando no haya pokemon
      console.error("Seleciona un Pokemon");
    }
  };

  return (
    <div className="mt-5">
      <h1>Selecciona un Pokemon</h1>
      <select value={selectedPokemon} onChange={({ target }) => setSelectedPokemon(target.value)}>
        <option value="" disabled>Select a Pokemon</option>
        {pokemonList.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={irAPersonajes}>Buscar</button>
    </div>
  );
}
