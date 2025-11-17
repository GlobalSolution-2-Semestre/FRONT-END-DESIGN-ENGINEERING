import React from 'react';

const Contato: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Entre em Contato
      </h1>
      
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
        Tem alguma dúvida ou quer uma demonstração? Preencha o formulário abaixo.
      </p>
      
      {}
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Nome
          </label>
          <input 
            type="text" 
            id="nome" 
            placeholder="Seu nome completo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Mensagem
          </label>
          <textarea 
            id="mensagem" 
            rows={4} 
            placeholder="Escreva sua dúvida ou solicitação..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md
                       bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg 
                       hover:bg-blue-700 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;