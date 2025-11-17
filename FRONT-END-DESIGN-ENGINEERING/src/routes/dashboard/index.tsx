import React, { useState, useEffect } from 'react';
import { get } from '../../service/api';

interface Alerta {
  id: number;
  idColaborador: number;
  tipoAlerta: string;
  descricao: string;
  dataEnvio: string; 
}

interface Relatorio {
  id: number;
  idColaborador: number;
  dataGeracao: string; 
  resumoAnalise: string;
  mediaHumor: number;
}

const Dashboard: React.FC = () => {
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDados = async () => {
    setLoading(true);
    setError(null);
    try {
      const [alertasData, relatoriosData] = await Promise.all([
        get<Alerta[]>('/alerta'),     //
        get<Relatorio[]>('/relatorio') //
      ]);
      setAlertas(alertasData);
      setRelatorios(relatoriosData);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Falha ao carregar dashboard: ${err.message}`);
      } else {
        setError('Falha ao carregar dashboard: Erro desconhecido');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  const alertasCriticos = alertas.filter(
    (a) => a.tipoAlerta === 'Crítico' || a.tipoAlerta === 'Atenção'
  );

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Dashboard de Bem-Estar
      </h1>

      {loading && <p className="dark:text-white text-center">Carregando dados...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {}
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Alertas (Críticos ou Atenção)
            </h2>
            <div className="space-y-4">
              {alertasCriticos.length === 0 ? (
                <p className="dark:text-gray-300">Nenhum alerta crítico no momento.</p>
              ) : (
                alertasCriticos.map((alerta) => (
                  <div key={alerta.id} className={`p-4 rounded-lg shadow ${
                    alerta.tipoAlerta === 'Crítico' 
                    ? 'bg-red-100 dark:bg-red-900 border-red-500' 
                    : 'bg-yellow-100 dark:bg-yellow-900 border-yellow-500'
                  } border-l-4`}>
                    <p className="font-bold text-lg dark:text-white">
                      {alerta.tipoAlerta} (Colab. ID: {alerta.idColaborador})
                    </p>
                    <p className="dark:text-gray-200">{alerta.descricao}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {new Date(alerta.dataEnvio).toLocaleString('pt-BR')}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          {}
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Relatórios da Equipe
            </h2>
            <div className="space-y-4">
              {relatorios.length === 0 ? (
                <p className="dark:text-gray-300">Nenhum relatório gerado.</p>
              ) : (
                relatorios.map((relatorio) => (
                  <div key={relatorio.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold dark:text-white">
                        Colaborador ID: {relatorio.idColaborador}
                      </h3>
                      <span className={`font-bold text-lg ${
                        relatorio.mediaHumor >= 7 ? 'text-green-600 dark:text-green-400' 
                        : relatorio.mediaHumor >= 5 ? 'text-yellow-600 dark:text-yellow-400' 
                        : 'text-red-600 dark:text-red-400'
                      }`}>
                        Média: {relatorio.mediaHumor.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Resumo: "{relatorio.resumoAnalise}"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Gerado em: {new Date(relatorio.dataGeracao).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>
      )}
    </div>
  );
};

export default Dashboard;