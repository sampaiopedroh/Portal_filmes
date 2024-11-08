import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Portal Filmes</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "hover:text-purple-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "active" : "hover:text-purple-300"
              }
            >
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/genre"
              className={({ isActive }) =>
                isActive ? "active" : "hover:text-purple-300"
              }
            >
              Gêneros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "active" : "hover:text-purple-300"
              }
            >
              Contato
            </NavLink>
          </li>
          {isLogged && (
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "active" : "hover:text-purple-300"
                }
              >
                Configurações
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Login isLogged={isLogged} handleLogin={handleLogin} />
    </header>
  );
}