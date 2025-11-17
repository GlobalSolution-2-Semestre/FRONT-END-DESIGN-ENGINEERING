import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-8 font-medium">
        <li><Link to="/" className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">Home</Link></li>
        <li><Link to="/integrantes" className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">Integrantes</Link></li>
        <li><Link to="/sobre" className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">Sobre</Link></li>
        <li><Link to="/faq" className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">FAQ</Link></li>
        <li><Link to="/contato" className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">Contato</Link></li>
      </ul>
    </nav>
  );
};