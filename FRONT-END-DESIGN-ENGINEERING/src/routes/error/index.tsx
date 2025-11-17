import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center 
                    bg-gray-100 dark:bg-gray-900">
      
      <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-500">
        404
      </h1>
      
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
        Página Não Encontrada
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Desculpe, a página que você está procurando não existe.
      </p>
      
      <Link 
        to="/" 
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium 
                   hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Voltar para a Home
      </Link>
    </div>
  );
};

export default Error;