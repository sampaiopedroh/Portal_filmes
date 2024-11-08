import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function MoviesByGenrePage() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [genreName, setGenreName] = useState(''); 
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-br&with_genres=${id}`);
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }
                const data = await response.json();
                setMovies(data.results);

                const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-br`);
                if (!genreResponse.ok) {
                    throw new Error(`Erro HTTP: ${genreResponse.status}`);
                }
                const genreData = await genreResponse.json();
                const genre = genreData.genres.find(g => g.id === parseInt(id)); 
                setGenreName(genre ? genre.name : 'Gênero Desconhecido'); 



            } catch (error) {
                console.error('Erro ao carregar filmes por gênero:', error);
                setMovies([]); 

            } finally {
                setIsLoading(false);
            }
        };

        fetchMoviesByGenre();
    }, [id]);


    return (

        <div className="container mx-auto p-4">
            {isLoading ? (
                <p className="text-center py-4">Carregando filmes...</p>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-4">Filmes do gênero: {genreName}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


                        {movies.length > 0 ? (
                            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)


                        ) : (

                            <p>Nenhum filme encontrado para este gênero.</p>
                        )}

                    </div>

                    <Link to="/genre" className="btn mt-4 inline-block">Voltar para lista de Gêneros</Link>

                </>
            )}
        </div>

    );
}