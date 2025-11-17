import React from 'react';

const faqData = [
  {
    pergunta: "Os dados dos funcionários são realmente anônimos?",
    resposta: "Sim. O anonimato é o pilar da nossa plataforma. Os funcionários respondem aos check-ins de forma anônima. Os gestores e o RH veem apenas dados estatísticos consolidados (ex: '70% da Equipe X reportou bons níveis de energia'), sem nunca identificar a resposta individual."
  },
  {
    pergunta: "Qual é o objetivo principal desta ferramenta?",
    resposta: "O objetivo não é vigiar, mas sim apoiar. A ferramenta serve como um termômetro para a empresa entender, de forma macro, os níveis de estresse, sobrecarga e bem-estar. Com esses dados, a gestão pode tomar ações proativas, como ajustar cargas de trabalho ou oferecer novos benefícios de saúde mental."
  },
  {
    pergunta: "Quem tem acesso aos relatórios e dados?",
    resposta: "O acesso é restrito e baseado em permissões. Tipicamente, gestores de equipe têm acesso apenas aos dados consolidados do seu próprio time, enquanto o RH pode ter uma visão geral da empresa. Respostas individuais nunca são acessíveis."
  },
  {
    pergunta: "A ferramenta oferece ajuda direta ao funcionário?",
    resposta: "Sim. Além do monitoramento, a plataforma oferece uma biblioteca de recursos de apoio, como artigos, vídeos sobre gestão de estresse, meditação e links diretos para os canais de ajuda profissional (psicólogos, EAPs) oferecidos pela empresa."
  }
];

const Faq: React.FC = () => {
  return (
    
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Perguntas Frequentes (FAQ)
      </h1>
      
      {}
      <div className="max-w-3xl mx-auto space-y-6">
        
        {faqData.map((item, index) => (
        
          <div 
            key={index} 
            className="rounded-lg border border-gray-200 dark:border-gray-700 p-6"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {item.pergunta}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.resposta}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Faq;