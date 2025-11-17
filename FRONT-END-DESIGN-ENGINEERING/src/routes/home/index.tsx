import React from 'react';
const Home: React.FC = () => {
  return (
    
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      
      {}
      <section className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400">
          Priorizando sua Saúde Mental no Trabalho
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nossa ferramenta oferece monitoramento e suporte contínuo 
          para o bem-estar da sua equipe.
        </p>
        {}
      </section>

      {}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="border p-6 rounded-lg text-center shadow-hover dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Check-ins Diários</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Funcionários registram seu humor e níveis de estresse de forma rápida e anônima.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center shadow-hover dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Análises e Relatórios</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gestores recebem insights sobre o bem-estar geral da equipe.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg text-center shadow-hover dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Recursos de Apoio</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Acesso a artigos, vídeos e contatos de profissionais de saúde mental.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;