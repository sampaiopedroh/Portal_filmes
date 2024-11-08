import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, overview }) {
  return (
    <Link
      to={`/movies/${id}`}
      className="w-64 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-96 object-cover"
      />
      <div className="p-4 bg-gray-800">
        <h3 className="text-white text-lg font-medium mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3">{overview}</p>
      </div>
    </Link>
  );
}