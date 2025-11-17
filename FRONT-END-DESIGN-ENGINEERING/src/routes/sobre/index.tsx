import React from "react";

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-5">Sobre o MindTrack</h1>

      <p className="text-lg leading-relaxed max-w-3xl mb-4">
        O MindTrack é uma solução corporativa desenvolvida com o objetivo de monitorar indicadores de 
        bem-estar emocional e saúde mental no ambiente de trabalho. A plataforma oferece recursos que 
        permitem acompanhar o humor, identificar sinais de estresse, mapear padrões comportamentais e 
        fornecer alertas preventivos para líderes e equipes de Recursos Humanos.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl mb-4">
        A iniciativa nasce da necessidade crescente das empresas em promover ambientes mais humanos, 
        acolhedores e saudáveis. O MindTrack possibilita decisões baseadas em dados, contribuindo para 
        a redução de burnout, melhoria do clima organizacional e aumento da produtividade.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl mb-4">
        Toda a solução segue uma arquitetura moderna utilizando React + Vite + TypeScript no 
        front-end, TailwindCSS para estilização e uma API Java hospedada na nuvem, integrada a um 
        banco Oracle. Assim, garantimos segurança, desempenho e escalabilidade.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl">
        O MindTrack foi projetado para ser simples, intuitivo e funcional, oferecendo uma experiência 
        acessível para colaboradores e gestores, contribuindo diretamente para uma cultura 
        organizacional mais saudável.
      </p>
    </div>
  );
};

export default Sobre;
