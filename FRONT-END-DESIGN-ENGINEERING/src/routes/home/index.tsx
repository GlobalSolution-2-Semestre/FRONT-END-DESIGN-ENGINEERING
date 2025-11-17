import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      
      {}
      <section className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Priorizando sua Saúde Mental no Trabalho
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Nossa ferramenta oferece monitoramento e suporte contínuo 
          para o bem-estar da sua equipe, alinhada ao futuro do trabalho.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link 
            to="/sobre" 
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Saiba Mais
          </Link>
          <Link 
            to="/contato" 
            className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>

      {}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="border p-6 rounded-lg text-center shadow-hover">
            <h3 className="text-xl font-semibold mb-3">Check-ins Diários</h3>
            <p className="text-gray-600">
              Funcionários registram seu humor e níveis de estresse de forma rápida e anônima.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center shadow-hover">
            <h3 className="text-xl font-semibold mb-3">Análises e Relatórios</h3>
            <p className="text-gray-600">
              Gestores recebem insights sobre o bem-estar geral da equipe, identificando tendências.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 