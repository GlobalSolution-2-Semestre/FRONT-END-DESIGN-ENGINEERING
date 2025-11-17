import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
      <p className="text-gray-700 leading-relaxed">
        Este projeto é a nossa proposta para a Global Solution 2025,
        focado no tema "O Futuro do Trabalho".
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Nossa solução é uma **"Ferramenta de monitoramento de bem-estar 
        e saúde mental no trabalho"**, um dos temas sugeridos. 
        O objetivo é usar a tecnologia para criar um ambiente de trabalho 
        mais saudável, permitindo que as empresas identifiquem pontos de estresse 
        e ofereçam suporte proativo aos seus colaboradores.
      </p>
    </div>
  );
};

export default Sobre; 