import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md my-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">Sobre o MindTrack</h1>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        O <strong>MindTrack Solutions</strong> é um sistema inovador desenvolvido para monitorar e promover o
        bem-estar emocional dos colaboradores em ambientes corporativos. Em um mundo onde o futuro do trabalho
        exige adaptação constante, a saúde mental tornou-se um pilar fundamental para a produtividade e a retenção de talentos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">Nossa Missão</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Criar ambientes de trabalho emocionalmente saudáveis, fornecendo aos gestores e ao RH dados reais e
        insights acionáveis para prevenir o burnout e melhorar o clima organizacional.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">Tecnologias</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>Front-end:</strong> React, Vite, TypeScript e TailwindCSS.</li>
        <li><strong>Back-end:</strong> Java com Framework Quarkus.</li>
        <li><strong>Banco de Dados:</strong> Oracle Database.</li>
        <li><strong>Inteligência Artificial:</strong> Python para análise preditiva.</li>
      </ul>
    </div>
  );
};

export default Sobre;