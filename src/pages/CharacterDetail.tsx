import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../interfaces/character';
import { getCharacter } from '../services/character';
import './characterDetail.css'

const CharacterDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (id) {
            getCharacter(parseInt(id)).then(response => setCharacter(response.data));
        }
    }, [id]);

    if (!character) return <p>Loading...</p>;

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species} {character.type ? `(${character.type})` : ''}</p>
            <p>Last known location: {character.location.name}</p>
            <h3>Episodes</h3>
            <ul>
                {character.episode.map(ep => (
                    <li key={ep}>Episode {ep.split('/').pop()}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;


