import { Link } from 'react-router-dom';

export default function GenreCard({ id, genero, descricao }) {

    const colors = [
        "bg-purple-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-red-500",
        "bg-pink-500",
        "bg-indigo-500",
    ];


    const randomColor = colors[id % colors.length]; 


    return (
        <Link to={`/genre/${id}`} className={`p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${randomColor} text-white`}>
            <h3 className="text-lg font-semibold mb-2">{genero}</h3>
            <p className="text-sm line-clamp-3">{descricao}</p>
        </Link>
    );
}