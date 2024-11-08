import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h2>
            <p className="text-gray-400 mb-8">Desculpe, a página que você está procurando não existe.</p>
            <Link to="/" className="btn">Voltar para a página inicial</Link>
        </div>
    );
}