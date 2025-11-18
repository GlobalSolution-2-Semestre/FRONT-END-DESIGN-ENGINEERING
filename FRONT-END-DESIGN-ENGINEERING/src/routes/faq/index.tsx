import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      pergunta: "O que é o MindTrack?",
      resposta: "É uma plataforma corporativa para monitoramento de humor e bem-estar dos colaboradores, visando melhorar a saúde mental no trabalho."
    },
    {
      pergunta: "Meus dados são anônimos?",
      resposta: "Sim. O MindTrack preza pela privacidade. Seus check-ins diários são contabilizados para métricas de equipe, mantendo o sigilo individual quando necessário."
    },
    {
      pergunta: "Como faço meu check-in diário?",
      resposta: "Basta acessar a área do colaborador, selecionar seu humor atual e, opcionalmente, deixar um comentário sobre o seu dia."
    },
    {
      pergunta: "Como os gestores usam os dados?",
      resposta: "Os gestores têm acesso a dashboards com médias e tendências de humor da equipe, permitindo ações preventivas contra burnout e estresse."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Perguntas Frequentes</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{faq.pergunta}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.resposta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;