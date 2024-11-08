import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [filmesPopulares, setFilmesPopulares] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br`
        );
        const data = await response.json();
        setFilmesPopulares(data.results);

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchMovies();

  }, []);


  return (
    <>
      {isLoading ? ( 
        <p className="text-center py-4">Carregando...</p>
      ) : (

        <CardContainer titulo="Filmes Populares">
          {filmesPopulares.map((filme) => (
            <MovieCard key={filme.id} {...filme} />
          ))}
        </CardContainer>
      )}


    </>
  );
}