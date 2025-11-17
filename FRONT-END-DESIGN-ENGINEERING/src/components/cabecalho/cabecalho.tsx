import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Precisamos do Link para os links móveis
import { Menu } from '../menu/menu'; // Este será nosso menu "Desktop"
import { useTheme } from '../../contexts/useTheme'; 

export const Cabecalho: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  // 1. Estado para controlar o menu "hamburger"
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // Adicionamos 'relative' para posicionar o menu móvel
    <header className="w-full bg-white p-5 shadow-md sticky top-0 z-50 
                     dark:bg-gray-800 dark:border-b dark:border-gray-700 relative">
      
      {/* Container principal do cabeçalho */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* 2. Menu Desktop: escondido em telas pequenas ('md:flex') */}
        <div className="hidden md:flex">
          <Menu /> 
        </div>

        {/* 3. Logo/Home Link (para aparecer no mobile) */}
        <div className="md:hidden">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Home
          </Link>
        </div>

        {}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                       font-medium py-2 px-4 rounded-lg"
          >
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'} 
          </button>

          {}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-800 dark:text-gray-100 p-1"
            aria-label="Abrir menu"
          >
            {}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {}
      {}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} 
                      absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-40`}>
        
        <ul className="flex flex-col items-center gap-4 p-5">
          <li>
            <Link 
              to="/integrantes" 
              onClick={handleLinkClick} 
              className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
            >
              Integrantes
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/faq" 
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};