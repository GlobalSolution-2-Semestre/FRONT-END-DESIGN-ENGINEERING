import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4 text-center">
        MindTrack – Monitoramento de Bem-Estar no Trabalho
      </h1>

      <p className="text-lg text-center max-w-2xl">
        O MindTrack é uma plataforma desenvolvida para acompanhar o bem-estar emocional de
        colaboradores, auxiliando empresas na prevenção de burnout, no aumento da qualidade de vida
        e na promoção de um ambiente de trabalho mais saudável.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Acessar Plataforma
      </button>
    </div>
  );
};

export default Home;
