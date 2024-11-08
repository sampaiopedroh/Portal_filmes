import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Container principal */}
      <Header />
      <main className="flex-grow p-4"> {/* Conteúdo principal com padding */}
        <Outlet />
      </main>
      <Footer /> {/* Renderiza o componente Footer */}
    </div>
  );
}

export default App;