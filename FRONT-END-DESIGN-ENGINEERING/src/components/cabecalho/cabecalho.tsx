import React from 'react';
import { Menu } from '../menu/menu';
import { useTheme } from '../../contexts/useTheme'; 

export const Cabecalho: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white p-5 shadow-md sticky top-0 z-50 
                     dark:bg-gray-800 dark:border-b dark:border-gray-700">
      
      <div className="container mx-auto flex justify-between items-center">
        
        <Menu /> 

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 
                     font-medium py-2 px-4 rounded-lg"
        >
          {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'} 
        </button>
      </div>

    </header>
  );
};