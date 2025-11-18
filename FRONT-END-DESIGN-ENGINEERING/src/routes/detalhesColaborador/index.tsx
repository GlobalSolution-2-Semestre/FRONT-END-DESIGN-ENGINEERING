import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jsPDF } from "jspdf"; 


type DadosBasicos = {
  id: number;
  nome: string;
};

type DadosProfissionais = {
  email: string;
  cargo: string;
};

type ColaboradorDetalhado = DadosBasicos & DadosProfissionais;

export default function DetalhesColaborador() {
  const { id } = useParams<{ id: string }>();
  const [colab, setColab] = useState<ColaboradorDetalhado | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://java-8ekc.onrender.com/colaborador')
      .then(res => res.json())
      .then((data: ColaboradorDetalhado[]) => {
        const encontrado = data.find(c => c.id === Number(id));
        setColab(encontrado || null);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro:", err);
        setLoading(false);
      });
  }, [id]);

  const gerarPDF = () => {
    if (!colab) return;

    const doc = new jsPDF();

    
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text("Ficha do Colaborador - MindTrack", 20, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    
    doc.text(`Nome: ${colab.nome}`, 20, 40);
    doc.text(`ID: ${colab.id}`, 20, 50);
    doc.text(`Cargo: ${colab.cargo}`, 20, 60);
    doc.text(`E-mail: ${colab.email}`, 20, 70);

    
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Gerado automaticamente pelo sistema MindTrack Solutions.", 20, 280);

    doc.save(`Ficha_${colab.nome.replace(/\s+/g, '_')}.pdf`);
  };

  if (loading) return <div className="p-10 text-center dark:text-white">Carregando...</div>;
  if (!colab) return <div className="p-10 text-center text-red-500">Colaborador não encontrado.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-700">
        
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold capitalize">{colab.nome}</h1>
          <p className="opacity-90 mt-1 flex items-center gap-2">
            <span className="bg-blue-700 px-2 py-1 rounded text-sm font-mono">ID: {colab.id}</span>
            <span className="capitalize">{colab.cargo}</span>
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-bold mb-1">E-mail Corporativo</p>
              <p className="text-lg text-gray-800 dark:text-white font-medium break-all">{colab.email}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-bold mb-1">Cargo Atual</p>
              <p className="text-lg text-gray-800 dark:text-white font-medium capitalize">{colab.cargo}</p>
            </div>
          </div>

          <div className="pt-6 border-t dark:border-gray-700 flex justify-between items-center">
            <Link to="/admin" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              ← Voltar para Lista
            </Link>

            <button 
              onClick={gerarPDF}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-sm flex items-center gap-2"
            >
              📄 Exportar Ficha PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}