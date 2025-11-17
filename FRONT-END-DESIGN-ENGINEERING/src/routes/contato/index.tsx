import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-6">Contato e Suporte</h1>

      <p className="mb-6 max-w-xl">
        Precisa de ajuda ou deseja implementar o MindTrack em sua empresa?
        Envie sua mensagem e nossa equipe retornará o mais rápido possível.
      </p>

      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />

        <textarea
          placeholder="Sua mensagem"
          className="w-full h-32 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;
