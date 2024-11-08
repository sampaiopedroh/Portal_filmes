export default function Login({ isLogged, handleLogin }) {
    return (
      <div className="flex items-center space-x-2">
        {isLogged && <p>Olá, usuário!</p>}
        <button
          onClick={handleLogin}
          className={`btn ${isLogged ? "btn-outline" : ""}`}
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </div>
    );
  }