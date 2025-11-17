import React from "react";

// Importando as imagens dos integrantes
import PedroFoto from "../../assets/integrantes/pedro.jpeg";
import GuilhermeFoto from "../../assets/integrantes/macedo.jpeg";

interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
}

const membros: Integrante[] = [
  {
    nome: "Pedro Henrique Luiz Alves Duarte",
    rm: "RM563405",
    turma: "1TDSPF",
    github: "https://github.com/pedrohenrique116",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-luiz-alves-duarte-4645b128a/",
    foto: PedroFoto
  },
  {
    nome: "Guilherme Macedo Martins",
    rm: "RM562396",
    turma: "1TDSPF",
    github: "https://github.com/GuilhermeMacedoMartins",
    linkedin: "https://www.linkedin.com/in/guilherme-macedo-b19979366/",
    foto: GuilhermeFoto
  }
];

const Integrantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-8">Integrantes da Equipe</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {membros.map((membro, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl bg-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-lg flex flex-col items-center"
          >
            <img
              src={membro.foto}
              alt="Foto do integrante"
              className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
            />

            <h2 className="text-xl font-semibold">{membro.nome}</h2>
            <p className="text-sm mt-1">RM: {membro.rm}</p>
            <p className="text-sm mb-4">Turma: {membro.turma}</p>

            <div className="flex gap-6">
              <a
                href={membro.github}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={membro.linkedin}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Integrantes;
