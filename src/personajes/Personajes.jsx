import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Personajes() {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => setPokemonData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    if (!pokemonData) {
        return <p>Loading...</p>;
    }

    const { name, stats, sprites } = pokemonData;
    const hp = stats.find(stat => stat.stat.name === "hp").base_stat;
    const attack = stats.find(stat => stat.stat.name === "attack").base_stat;
    const defense = stats.find(stat => stat.stat.name === "defense").base_stat;
    const frontDefaultImage = sprites.front_default;

    const goHome = () => {
        // Usamos Nvaigate function
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: '#f0f0f0' }}>
            <Card style={{ width: '70vh' }}>
                <Card.Img variant="top" src={frontDefaultImage} alt={`Front Default of ${name}`} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>{name}</Card.Title>
                    <Card.Text>
                        <p>HP: {hp}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={goHome}>Go Home</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
