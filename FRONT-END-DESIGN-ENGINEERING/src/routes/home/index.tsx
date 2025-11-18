import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      
      {}
      <section className="text-center py-12 md:py-16">
        
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400">
          Priorizando sua Saúde Mental no Trabalho
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          O MindTrack oferece monitoramento e suporte contínuo 
          para o bem-estar da sua equipe, alinhado aos objetivos de desenvolvimento sustentável.
        </p>
        
        {}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <Link 
            to="/sobre" 
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Sobre o Projeto
          </Link>

          <Link 
            to="/integrantes" 
            className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors shadow-md"
          >
            Nossa Equipe
          </Link>

          <Link 
            to="/contato" 
            className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors shadow-md"
          >
            Fale Conosco
          </Link>
        </div>
      </section>

      {}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Como Funciona
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="border p-6 rounded-lg text-center shadow-lg dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Check-ins Diários</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Funcionários registram seu humor e níveis de estresse de forma rápida e anônima.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center shadow-lg dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Análises e Relatórios</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gestores recebem insights sobre o bem-estar geral da equipe para tomada de decisão.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center shadow-lg dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Dúvidas Frequentes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tem dúvidas sobre como utilizamos seus dados ou como implementar?
            </p>
            <Link to="/faq" className="text-blue-600 hover:underline dark:text-blue-400">
              Acesse nosso FAQ
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;