import { useState, useEffect } from 'react';

interface Colaborador {
  id?: number;
  nome: string;
  email: string;
  cargo: string;
}

interface Checkin {
  id?: number;
  idColaborador: number;
  dataRegistro?: string;
  humor: string;
  comentario: string;
}

interface Relatorio {
  id?: number;
  idColaborador: number;
  mediaHumor: number;
  resumoAnalise: string;
  dataGeracao?: string;
}

interface Alerta {
  id?: number;
  idColaborador: number;
  tipoAlerta: string;
  descricao: string;
  dataEnvio?: string;
}

const API_URL = "https://java-8ekc.onrender.com"; 

export default function AdminGeral() {
  const [activeTab, setActiveTab] = useState<'colaboradores' | 'checkins' | 'relatorios' | 'alertas'>('colaboradores');
  
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [checkins, setCheckins] = useState<Checkin[]>([]);
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  const [formColab, setFormColab] = useState<Colaborador>({ nome: '', email: '', cargo: '' });
  const [formCheckin, setFormCheckin] = useState<Checkin>({ idColaborador: 0, humor: '', comentario: '' });
  const [formRelatorio, setFormRelatorio] = useState<Relatorio>({ idColaborador: 0, mediaHumor: 0, resumoAnalise: '' });
  const [formAlerta, setFormAlerta] = useState<Alerta>({ idColaborador: 0, tipoAlerta: '', descricao: '' });

  const fetchData = () => {
    let endpoint = '';
    if (activeTab === 'colaboradores') endpoint = '/colaborador';
    else if (activeTab === 'checkins') endpoint = '/checkin';
    else if (activeTab === 'relatorios') endpoint = '/relatorio';
    else if (activeTab === 'alertas') endpoint = '/alerta';

    fetch(API_URL + endpoint)
      .then(response => {
     
        if (!response.ok) {
          throw new Error('Não foi possível buscar os dados.');
        }
        return response.json(); 
      })
      .then(data => {
     
        if (activeTab === 'colaboradores') setColaboradores(data);
        else if (activeTab === 'checkins') setCheckins(data);
        else if (activeTab === 'relatorios') setRelatorios(data);
        else if (activeTab === 'alertas') setAlertas(data);
      })
      .catch(error => {
     
        console.error('Erro (GET):', error);
        alert("Erro ao carregar dados.");
      });
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleSubmit = (e: React.FormEvent, type: 'colaborador' | 'checkin' | 'relatorio' | 'alerta') => {
    e.preventDefault();
    let endpoint = '';
    let body = {};

    if (type === 'colaborador') {
      endpoint = '/colaborador';
      body = formColab;
    } else if (type === 'checkin') {
      endpoint = '/checkin';
      body = formCheckin;
    } else if (type === 'relatorio') {
      endpoint = '/relatorio';
      body = formRelatorio;
    } else if (type === 'alerta') {
      endpoint = '/alerta';
      body = formAlerta;
    }

    fetch(API_URL + endpoint, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(body) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação POST.'); 
      }
 
      return response.text().then(text => text ? JSON.parse(text) : {}); 
    })
    .then(data => {
      console.log('Dados recebidos (POST):', data);
      alert("Cadastrado com sucesso!");
      fetchData(); 
      
      setFormColab({ nome: '', email: '', cargo: '' });
      setFormCheckin({ idColaborador: 0, humor: '', comentario: '' });
      setFormRelatorio({ idColaborador: 0, mediaHumor: 0, resumoAnalise: '' });
      setFormAlerta({ idColaborador: 0, tipoAlerta: '', descricao: '' });
    })
    .catch(error => {
      console.error('Erro (POST):', error); 
      alert("Erro ao cadastrar. Verifique o console.");
    });
  };

  const handleDelete = (id: number | undefined, endpoint: string) => {
    if (!id) return;
    if (!confirm("Tem certeza que deseja excluir este item?")) return;

    fetch(`${API_URL}${endpoint}/${id}`, {
      method: 'DELETE' 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação DELETE.'); 
      }
      console.log('Recurso excluído com sucesso.'); 
      alert("Item excluído!");
      fetchData(); 
    })
    .catch(error => {
      console.error('Erro (DELETE):', error); 
      alert("Não foi possível excluir.");
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen shadow-lg mt-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
        Painel Administrativo Geral
      </h1>
      
      {}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        {['colaboradores', 'checkins', 'relatorios', 'alertas'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
        
        {}
        {activeTab === 'colaboradores' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Novo Colaborador</h3>
            <form onSubmit={(e) => handleSubmit(e, 'colaborador')} className="grid md:grid-cols-4 gap-4 mb-8">
              <input type="text" placeholder="Nome" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formColab.nome} onChange={e => setFormColab({...formColab, nome: e.target.value})} />
              <input type="email" placeholder="Email" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formColab.email} onChange={e => setFormColab({...formColab, email: e.target.value})} />
              <input type="text" placeholder="Cargo" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formColab.cargo} onChange={e => setFormColab({...formColab, cargo: e.target.value})} />
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700">Cadastrar</button>
            </form>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Colaboradores Cadastrados</h3>
            <div className="space-y-2">
              {colaboradores.map(c => (
                <div key={c.id} className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded shadow-sm border-l-4 border-blue-500">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{c.nome}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{c.cargo} | {c.email}</p>
                  </div>
                  <button onClick={() => handleDelete(c.id, '/colaborador')} className="text-red-500 hover:text-red-700 font-bold px-3">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === 'checkins' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Novo Check-in</h3>
            <form onSubmit={(e) => handleSubmit(e, 'checkin')} className="grid md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formCheckin.idColaborador || ''} onChange={e => setFormCheckin({...formCheckin, idColaborador: +e.target.value})} />
              <select required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formCheckin.humor} onChange={e => setFormCheckin({...formCheckin, humor: e.target.value})}>
                <option value="">Humor</option>
                <option value="Feliz">Feliz</option>
                <option value="Motivado">Motivado</option>
                <option value="Tranquilo">Tranquilo</option>
                <option value="Neutro">Neutro</option>
                <option value="Cansado">Cansado</option>
                <option value="Estressado">Estressado</option>
              </select>
              <input type="text" placeholder="Comentário" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formCheckin.comentario} onChange={e => setFormCheckin({...formCheckin, comentario: e.target.value})} />
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700">Registrar</button>
            </form>

            <div className="space-y-2">
              {checkins.map(c => (
                <div key={c.id} className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded shadow-sm border-l-4 border-green-500">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">Humor: {c.humor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {c.idColaborador} - "{c.comentario}"</p>
                    {c.dataRegistro && <span className="text-xs text-gray-400">{c.dataRegistro}</span>}
                  </div>
                  <button onClick={() => handleDelete(c.id, '/checkin')} className="text-red-500 hover:text-red-700 font-bold px-3">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === 'relatorios' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Novo Relatório</h3>
            <form onSubmit={(e) => handleSubmit(e, 'relatorio')} className="grid md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formRelatorio.idColaborador || ''} onChange={e => setFormRelatorio({...formRelatorio, idColaborador: +e.target.value})} />
              <input type="number" step="0.1" placeholder="Média (0-10)" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formRelatorio.mediaHumor || ''} onChange={e => setFormRelatorio({...formRelatorio, mediaHumor: +e.target.value})} />
              <input type="text" placeholder="Resumo" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formRelatorio.resumoAnalise} onChange={e => setFormRelatorio({...formRelatorio, resumoAnalise: e.target.value})} />
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700">Salvar</button>
            </form>

            <div className="space-y-2">
              {relatorios.map(r => (
                <div key={r.id} className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded shadow-sm border-l-4 border-purple-500">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">Média: {r.mediaHumor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {r.idColaborador} - {r.resumoAnalise}</p>
                  </div>
                  <button onClick={() => handleDelete(r.id, '/relatorio')} className="text-red-500 hover:text-red-700 font-bold px-3">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === 'alertas' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Emitir Alerta</h3>
            <form onSubmit={(e) => handleSubmit(e, 'alerta')} className="grid md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formAlerta.idColaborador || ''} onChange={e => setFormAlerta({...formAlerta, idColaborador: +e.target.value})} />
              <select required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formAlerta.tipoAlerta} onChange={e => setFormAlerta({...formAlerta, tipoAlerta: e.target.value})}>
                 <option value="">Tipo</option>
                 <option value="Informativo">Informativo</option>
                 <option value="Atenção">Atenção</option>
                 <option value="Aviso">Aviso</option>
                 <option value="Crítico">Crítico</option>
              </select>
              <input type="text" placeholder="Descrição" required className="p-2 border rounded dark:bg-gray-700 dark:text-white" 
                value={formAlerta.descricao} onChange={e => setFormAlerta({...formAlerta, descricao: e.target.value})} />
              <button type="submit" className="bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">Emitir</button>
            </form>

            <div className="space-y-2">
              {alertas.map(a => (
                <div key={a.id} className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded shadow-sm border-l-4 border-red-500">
                  <div>
                    <p className="font-bold text-red-600 dark:text-red-400">{a.tipoAlerta}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {a.idColaborador} - {a.descricao}</p>
                  </div>
                  <button onClick={() => handleDelete(a.id, '/alerta')} className="text-red-500 hover:text-red-700 font-bold px-3">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}