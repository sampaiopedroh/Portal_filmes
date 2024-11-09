import { useParams, Link } from 'react-router-dom';

export default function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-br`);
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`); 
                }
                const data = await response.json();
                setMovie(data);

            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error);
                setMovie(null); 

            } finally {
                setIsLoading(false);

            }
        };



        fetchMovieDetails();
    }, [id]);



    if (isLoading) {
        return <p className="text-center py-4">Carregando detalhes...</p>;
    }

    if (!movie) {
        return (
            <div className="container mx-auto p-4">
                <p>Filme não encontrado ou erro ao carregar detalhes.</p>
                <Link to="/movies" className="btn mt-4">Voltar para a lista de filmes</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-200 h-200 rounded-lg mb-4" />
            <p className="text-gray-300 mb-4">{movie.overview}</p>


            <div className='flex gap-5 items-center mb-6'>

                <p>
                    <span className='font-semibold'>Data de Lançamento:</span> {movie.release_date}
                </p>
                <p>
                    <span className='font-semibold'>Avaliação:</span> {movie.vote_average}
                </p>
            </div>



            <Link to="/movies" className="btn mt-4 inline-block">Voltar para a lista de filmes</Link>


        </div>
    );
}
