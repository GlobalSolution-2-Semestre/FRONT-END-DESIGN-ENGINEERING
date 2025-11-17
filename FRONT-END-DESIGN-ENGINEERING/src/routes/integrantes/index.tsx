import React from "react";
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
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">

      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Integrantes da Equipe
      </h1>

      {}
      <div className="flex flex-wrap justify-center gap-8">

        {membros.map((membro, index) => (
          <div
            key={index}
        
            className="w-full max-w-sm p-6 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg flex flex-col items-center"
          >
            <img
              src={membro.foto}
              alt="Foto do integrante"
              className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
              {membro.nome}
            </h2>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              RM: {membro.rm}
            </p>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
              Turma: {membro.turma}
            </p>

            <div className="flex gap-6">
              <a
                href={membro.github}
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={membro.linkedin}
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
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