import React from "react";

const FAQ: React.FC = () => {
  const perguntas = [
    {
      q: "O que é o MindTrack?",
      a: "É uma plataforma corporativa para monitoramento de bem-estar emocional e saúde mental de colaboradores."
    },
    {
      q: "Como os dados são utilizados?",
      a: "As informações servem para apoiar decisões de Recursos Humanos, identificar riscos de burnout e melhorar o clima organizacional."
    },
    {
      q: "Os colaboradores têm privacidade?",
      a: "Sim. Os dados são tratados de forma anônima ou restrita, seguindo as diretrizes da LGPD."
    },
    {
      q: "O sistema envia alertas?",
      a: "Sim, alertas automáticos podem ser gerados com base no humor, padrões de comportamento e relatórios dos colaboradores."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-6">Perguntas Frequentes (FAQ)</h1>

      <div className="space-y-4 max-w-3xl">
        {perguntas.map((item, i) => (
          <div key={i} className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="font-semibold">{item.q}</h2>
            <p className="mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
