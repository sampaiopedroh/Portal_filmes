import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white lg:h-auto flex flex-wrap px-8 pt-24 pb-16 justify-around text-left gap-20">
            <div className="flex flex-col gap-10">
                <h3 className="font-semibold text-2xl">Portal Filmes</h3>
                <p>Encontre o melhor filme para a sua melhor noite.</p>
            </div>
            <div className="flex gap-[10vh] sm:gap-[8vw] flex-col text-center sm:text-left sm:flex-row">
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Filmes</h3>
                    <div className="flex flex-col gap-3">
                        <Link to="/historia" className="duration-100 hover:scale-105">
                            <p>História</p>
                        </Link>
                        <Link to="/equipe" className="duration-100 hover:scale-105">
                            <p>Equipe</p>
                        </Link>
                        <Link to="/legado" className="duration-100 hover:scale-105">
                            <p>Legado</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Categorias</h3>
                    <div className="flex flex-col gap-3">
                        <Link to="/acao" className="duration-100 hover:scale-105">
                            <p>Ação</p>
                        </Link>
                        <Link to="/drama" className="duration-100 hover:scale-105">
                            <p>Drama</p>
                        </Link>
                        <Link to="/comedia" className="duration-100 hover:scale-105">
                            <p>Comédia</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Contato</h3>
                    <div className="flex flex-col gap-3">
                        <Link to="/instagram" className="duration-100 hover:scale-105">
                            <p>Instagram</p>
                        </Link>
                        <Link to="/whatsapp" className="duration-100 hover:scale-105">
                            <p>WhatsApp</p>
                        </Link>
                        <Link to="/email" className="duration-100 hover:scale-105">
                            <p>Email</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-[1px] w-[95%] bg-white"></div>

            <div className="flex">
                <div>
                    <h3>@2024 Portal Filmes. Todos os direitos reservados.</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
