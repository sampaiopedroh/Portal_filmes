import { useState, useEffect } from 'react';
import GenreCard from '../components/GenreCard';

export default function GenreListPage() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('/src/data/genres.json') // Buscando os dados do arquivo genres.json
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(error => console.error('Erro ao carregar gêneros:', error));
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Gêneros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {genres.map(genre => (
                    <GenreCard key={genre.id} {...genre} />
                ))}
            </div>
        </div>
    );
}