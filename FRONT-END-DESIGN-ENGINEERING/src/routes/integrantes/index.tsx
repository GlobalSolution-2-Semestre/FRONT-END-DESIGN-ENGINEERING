import React from "react";

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
    foto: "https://via.placeholder.com/150"
  },
  {
    nome: "Guilherme Macedo Martins",
    rm: "RM562396",
    turma: "1TDSPF",
    github: "https://github.com/GuilhermeMacedoMartins",
    linkedin: "https://www.linkedin.com/in/guilherme-macedo-b19979366/",
    foto: "https://via.placeholder.com/150"
  },
];

const Integrantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-8">Integrantes da Equipe</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {membros.map((membro, i) => (
          <div key={i} className="p-5 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <img
              src={membro.foto}
              alt={membro.nome}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-xl font-semibold text-center">{membro.nome}</h2>
            <p className="text-center text-sm mt-1">RM: {membro.rm}</p>
            <p className="text-center text-sm mb-3">Turma: {membro.turma}</p>

            <div className="flex justify-center gap-4">
              <a href={membro.github} className="text-blue-500 hover:underline">GitHub</a>
              <a href={membro.linkedin} className="text-blue-500 hover:underline">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
