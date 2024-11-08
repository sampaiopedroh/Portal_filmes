import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Seu nome é ${nome}, seu e-mail é ${email} a mensagem é ${mensagem}`);

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
            Mensagem:
          </label>
          <textarea
            id="mensagem"
            rows="4"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}