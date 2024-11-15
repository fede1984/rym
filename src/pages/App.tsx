import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getCharacters } from '../services/character';
import { Character } from '../interfaces/character';
import './App.css';


const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await getCharacters(page);
                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };
        fetchCharacters();
    }, [page]);

    const handlePreviousPage = useCallback(() => {
        setPage(prev => Math.max(prev - 1, 1));
    }, []);

    const handleNextPage = useCallback(() => {
        setPage(prev => (prev < totalPages ? prev + 1 : prev));
    }, [totalPages]);

    return (
        <div className="app-container">
            <h1 className='app-title'>Rick and Morty Characters</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        image={character.image}
                        name={character.name}
                        species={character.species}
                    />
                ))}
            </div>
            <div className='app-button-container' >
                <button className='app-button' onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <span className='app-page-counter'> Page {page} of {totalPages}</span>
                <button className='app-button' onClick={handleNextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default App;
