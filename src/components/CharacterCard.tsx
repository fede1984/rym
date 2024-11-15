import React from 'react';
import { Link } from 'react-router-dom';
import './Character.css'

interface CharacterCardProps {
    id: number;
    image: string;
    name: string;
    species: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, image, name, species }) => (
    <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}className='card-container'>
        <div style={{ padding: '1rem', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px' }}>
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{name}</h3>
            <p>{species}</p>
        </div>
    </Link>
);

export default React.memo(CharacterCard);


