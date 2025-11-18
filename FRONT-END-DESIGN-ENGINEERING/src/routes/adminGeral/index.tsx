import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchData = () => {
    let endpoint = '';
    if (activeTab === 'colaboradores') endpoint = '/colaborador';
    else if (activeTab === 'checkins') endpoint = '/checkin';
    else if (activeTab === 'relatorios') endpoint = '/relatorio';
    else if (activeTab === 'alertas') endpoint = '/alerta';

    fetch(API_URL + endpoint)
      .then(response => {
        if (!response.ok) throw new Error('Não foi possível buscar os dados.');
        return response.json();
      })
      .then(data => {
        if (activeTab === 'colaboradores') setColaboradores(data);
        else if (activeTab === 'checkins') setCheckins(data);
        else if (activeTab === 'relatorios') setRelatorios(data);
        else if (activeTab === 'alertas') setAlertas(data);
      })
      .catch(error => console.error('Erro (GET):', error));
  };

  useEffect(() => {
    fetchData();
    cancelEdit();
  }, [activeTab]);

  const handleEditColab = (colab: Colaborador) => {
    setFormColab(colab);
    setEditingId(colab.id || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormColab({ nome: '', email: '', cargo: '' });
  };

  const handleSubmit = (e: React.FormEvent, type: 'colaborador' | 'checkin' | 'relatorio' | 'alerta') => {
    e.preventDefault();
    let endpoint = '';
    let body: any = {};
    let method = 'POST';

    if (type === 'colaborador') {
      endpoint = '/colaborador';
      body = formColab;
      if (editingId) {
        method = 'PUT';
        body = { ...formColab, id: editingId };
      }
    } 
    else if (type === 'checkin') { endpoint = '/checkin'; body = formCheckin; }
    else if (type === 'relatorio') { endpoint = '/relatorio'; body = formRelatorio; }
    else if (type === 'alerta') { endpoint = '/alerta'; body = formAlerta; }

    fetch(API_URL + endpoint, {
      method: method, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) throw new Error(`Erro na solicitação ${method}.`);
      return response.text().then(text => text ? JSON.parse(text) : {}); 
    })
    .then(() => {
      alert(editingId ? "Atualizado com sucesso!" : "Cadastrado com sucesso!");
      fetchData();
      cancelEdit();
      
      setFormCheckin({ idColaborador: 0, humor: '', comentario: '' });
      setFormRelatorio({ idColaborador: 0, mediaHumor: 0, resumoAnalise: '' });
      setFormAlerta({ idColaborador: 0, tipoAlerta: '', descricao: '' });
    })
    .catch(error => {
      console.error(`Erro (${method}):`, error);
      alert("Erro ao salvar. Verifique o console.");
    });
  };

  const handleDelete = (id: number | undefined, endpoint: string) => {
    if (!id) return;
    if (!confirm("Tem certeza que deseja excluir?")) return;

    fetch(`${API_URL}${endpoint}/${id}`, { method: 'DELETE' })
    .then(response => {
      if (!response.ok) throw new Error('Erro no DELETE.');
      alert("Item excluído!");
      fetchData();
    })
    .catch(error => {
      console.error('Erro (DELETE):', error);
      alert("Não foi possível excluir.");
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 min-h-screen shadow-lg mt-4 sm:mt-8 rounded-xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-700 dark:text-blue-400">
        Painel Administrativo Geral
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        {['colaboradores', 'checkins', 'relatorios', 'alertas'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg border dark:border-gray-700">
        {activeTab === 'colaboradores' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {editingId ? `Editando Colaborador #${editingId}` : 'Novo Colaborador'}
              </h3>
              {editingId && (
                <button onClick={cancelEdit} className="text-sm text-red-500 hover:underline">
                  Cancelar Edição
                </button>
              )}
            </div>

            <form onSubmit={(e) => handleSubmit(e, 'colaborador')} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <input type="text" placeholder="Nome" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formColab.nome} onChange={e => setFormColab({...formColab, nome: e.target.value})} />
              <input type="email" placeholder="Email" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formColab.email} onChange={e => setFormColab({...formColab, email: e.target.value})} />
              <input type="text" placeholder="Cargo" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formColab.cargo} onChange={e => setFormColab({...formColab, cargo: e.target.value})} />
              
              <button type="submit" className={`font-bold py-2 rounded text-white transition-colors w-full ${editingId ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'}`}>
                {editingId ? 'Atualizar' : 'Cadastrar'}
              </button>
            </form>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Colaboradores Cadastrados</h3>
            <div className="space-y-3">
              {colaboradores.map(c => (
                <div key={c.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-700 p-4 rounded shadow-sm border-l-4 border-blue-500 gap-3">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{c.nome} <span className='text-xs text-gray-400'>#{c.id}</span></p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 break-all">{c.cargo} | {c.email}</p>
                  </div>
                  <div className="flex gap-2 self-end md:self-auto">
                    <Link 
                      to={`/admin/detalhes/${c.id}`}
                      className="text-blue-600 hover:text-blue-800 font-bold px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      Ver
                    </Link>
                    <button 
                      onClick={() => handleEditColab(c)} 
                      className="text-yellow-600 hover:text-yellow-800 font-bold px-3 py-1 border border-yellow-600 rounded hover:bg-yellow-50 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(c.id, '/colaborador')} 
                      className="text-red-500 hover:text-red-700 font-bold px-3 py-1 border border-red-500 rounded hover:bg-red-50 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'checkins' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Novo Check-in</h3>
            <form onSubmit={(e) => handleSubmit(e, 'checkin')} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formCheckin.idColaborador || ''} onChange={e => setFormCheckin({...formCheckin, idColaborador: +e.target.value})} />
              <select required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formCheckin.humor} onChange={e => setFormCheckin({...formCheckin, humor: e.target.value})}>
                <option value="">Humor</option>
                <option value="Feliz">Feliz</option>
                <option value="Motivado">Motivado</option>
                <option value="Tranquilo">Tranquilo</option>
                <option value="Neutro">Neutro</option>
                <option value="Cansado">Cansado</option>
                <option value="Estressado">Estressado</option>
              </select>
              <input type="text" placeholder="Comentário" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formCheckin.comentario} onChange={e => setFormCheckin({...formCheckin, comentario: e.target.value})} />
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 w-full">Registrar</button>
            </form>

            <div className="space-y-3">
              {checkins.map(c => (
                <div key={c.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-700 p-4 rounded shadow-sm border-l-4 border-green-500 gap-2">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">Humor: {c.humor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {c.idColaborador} - "{c.comentario}"</p>
                  </div>
                  <button onClick={() => handleDelete(c.id, '/checkin')} className="text-red-500 hover:text-red-700 font-bold px-3 py-1 border border-red-500 rounded self-end md:self-auto text-sm">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === 'relatorios' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Novo Relatório</h3>
            <form onSubmit={(e) => handleSubmit(e, 'relatorio')} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formRelatorio.idColaborador || ''} onChange={e => setFormRelatorio({...formRelatorio, idColaborador: +e.target.value})} />
              <input type="number" step="0.1" placeholder="Média (0-10)" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formRelatorio.mediaHumor || ''} onChange={e => setFormRelatorio({...formRelatorio, mediaHumor: +e.target.value})} />
              <input type="text" placeholder="Resumo" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formRelatorio.resumoAnalise} onChange={e => setFormRelatorio({...formRelatorio, resumoAnalise: e.target.value})} />
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 w-full">Salvar</button>
            </form>

            <div className="space-y-3">
              {relatorios.map(r => (
                <div key={r.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-700 p-4 rounded shadow-sm border-l-4 border-purple-500 gap-2">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">Média: {r.mediaHumor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {r.idColaborador} - {r.resumoAnalise}</p>
                  </div>
                  <button onClick={() => handleDelete(r.id, '/relatorio')} className="text-red-500 hover:text-red-700 font-bold px-3 py-1 border border-red-500 rounded self-end md:self-auto text-sm">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'alertas' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Emitir Alerta</h3>
            <form onSubmit={(e) => handleSubmit(e, 'alerta')} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <input type="number" placeholder="ID Colaborador" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formAlerta.idColaborador || ''} onChange={e => setFormAlerta({...formAlerta, idColaborador: +e.target.value})} />
              <select required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formAlerta.tipoAlerta} onChange={e => setFormAlerta({...formAlerta, tipoAlerta: e.target.value})}>
                 <option value="">Tipo</option>
                 <option value="Informativo">Informativo</option>
                 <option value="Atenção">Atenção</option>
                 <option value="Aviso">Aviso</option>
                 <option value="Crítico">Crítico</option>
              </select>
              <input type="text" placeholder="Descrição" required className="p-2 border rounded dark:bg-gray-700 dark:text-white w-full" 
                value={formAlerta.descricao} onChange={e => setFormAlerta({...formAlerta, descricao: e.target.value})} />
              <button type="submit" className="bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 w-full">Emitir</button>
            </form>

            <div className="space-y-3">
              {alertas.map(a => (
                <div key={a.id} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-700 p-4 rounded shadow-sm border-l-4 border-red-500 gap-2">
                  <div>
                    <p className="font-bold text-red-600 dark:text-red-400">{a.tipoAlerta}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colab ID: {a.idColaborador} - {a.descricao}</p>
                  </div>
                  <button onClick={() => handleDelete(a.id, '/alerta')} className="text-red-500 hover:text-red-700 font-bold px-3 py-1 border border-red-500 rounded self-end md:self-auto text-sm">Excluir</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}