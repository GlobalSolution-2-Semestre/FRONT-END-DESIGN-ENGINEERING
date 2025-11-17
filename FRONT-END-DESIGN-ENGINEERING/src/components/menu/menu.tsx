import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-8 font-medium">
        <li><Link to="/checkin" className="text-green-600 font-bold ...">Fazer Check-in</Link></li>
        <li><Link to="/" className="text-gray-800 ...">Home</Link></li>
        
        {}
        <li><Link to="/dashboard" className="text-purple-600 font-bold hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300">Dashboard</Link></li>

        <li><Link to="/integrantes" className="text-gray-800 ...">Integrantes</Link></li>
        <li><Link to="/sobre" className="text-gray-800 ...">Sobre</Link></li>
        <li><Link to="/faq" className="text-gray-800 ...">FAQ</Link></li>
        <li><Link to="/contato" className="text-gray-800 ...">Contato</Link></li>
        <li><Link to="/gerenciar" className="text-blue-600 font-bold ...">Gerenciar</Link></li>
      </ul>
    </nav>
  );
};