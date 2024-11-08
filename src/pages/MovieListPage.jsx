import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {
    const [search, setSearch] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br`
                );
                const data = await response.json();
                setFilmes(data.results);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filmesFiltrados = filmes.filter((filme) =>
        filme.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Catálogo de Filmes</h2>
            <div className="mb-4">
                <input
                    type="text"
                    id="search"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Buscar filmes..."
                />
            </div>
            {isLoading ? (
                <p className="text-center py-4">Carregando filmes...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filmesFiltrados.length > 0 ? (
                        filmesFiltrados.map((filme) => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                    ) : (
                        <p>Nenhum filme encontrado.</p>
                    )}
                </div>
            )}
        </div>
    );
}