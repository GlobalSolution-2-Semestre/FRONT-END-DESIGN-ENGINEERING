import React from 'react';
import { Outlet } from 'react-router-dom';
import { Cabecalho } from './cabecalho/cabecalho';
import { Rodape } from './rodape/rodape';

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      
      <Cabecalho />
      
      {}
      <main className="flex-grow container mx-auto p-4 py-8">
        <Outlet />
      </main>
      
      <Rodape />

    </div>
  );
};