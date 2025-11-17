import React, { useState, useEffect } from 'react';
import { get, post, put, del } from '../../service/api';

interface Colaborador {
  id: number;
  nome: string;
  email: string;
  cargo: string;
}

type ColaboradorFormData = Omit<Colaborador, 'id'>;

const GerenciarColaboradores: React.FC = () => {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ColaboradorFormData>({
    nome: '',
    email: '',
    cargo: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const fetchColaboradores = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await get<Colaborador[]>('/colaborador'); 
      setColaboradores(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Falha ao carregar: ${err.message}`);
      } else {
        setError('Falha ao carregar: Erro desconhecido');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ nome: '', email: '', cargo: '' });
    setEditingId(null);
    setFormError(null);
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.nome || !formData.email || !formData.cargo) {
      setFormError('Nome, Email e Cargo são obrigatórios.');
      return;
    }

    try {
      if (editingId) {
        const dataToUpdate = { ...formData, id: editingId };
        await put<Colaborador>('/colaborador', dataToUpdate); 
      } else {
        await post<Colaborador>('/colaborador', formData);
      }
      resetForm();
      fetchColaboradores();
    } catch (err) { 
      if (err instanceof Error) {
        setFormError(`Falha ao salvar: ${err.message}`);
      } else {
        setFormError('Falha ao salvar: Erro desconhecido');
      }
      console.error(err);
    }
  };

  const handleEdit = (colaborador: Colaborador) => {
    setEditingId(colaborador.id);
    setFormData({
      nome: colaborador.nome,
      email: colaborador.email,
      cargo: colaborador.cargo,
    });
  };
 
  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja deletar este colaborador?')) {
      try {
        await del<null>(`/colaborador/${id}`); 
        fetchColaboradores();
      } catch (err) { 
        if (err instanceof Error) {
          setError(`Falha ao deletar: ${err.message}`);
        } else {
          setError('Falha ao deletar: Erro desconhecido');
        }
        console.error(err);
      }
    }
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Gerenciar Colaboradores
      </h1>

      {}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          {editingId ? 'Editar Colaborador' : 'Adicionar Novo Colaborador'}
        </h2>
        
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Nome</label>
          <input 
            type="text" 
            name="nome" 
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Cargo</label>
          <input 
            type="text" 
            name="cargo" 
            id="cargo"
            value={formData.cargo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>

        {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

        <div className="flex gap-4">
          <button 
            type="submit" 
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {editingId ? 'Atualizar' : 'Salvar'}
          </button>
          {editingId && (
            <button 
              type="button" 
              onClick={resetForm}
              className="bg-gray-400 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-500 transition-colors"
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>

      {}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Colaboradores Cadastrados</h2>
        
        {loading && <p className="dark:text-white">Carregando colaboradores...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        {!loading && !error && (
          <div className="space-y-4">
            {colaboradores.length === 0 ? (
              <p className="dark:text-gray-300">Nenhum colaborador cadastrado.</p>
            ) : (
              colaboradores.map((colab) => (
                <div key={colab.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow flex flex-wrap justify-between items-center gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold dark:text-white">{colab.nome}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{colab.email}</p>
                    <p className="text-gray-500 dark:text-gray-400 italic">{colab.cargo}</p>
                  </div>
                  <div className="flex gap-4 flex-shrink-0">
                    <button 
                      onClick={() => handleEdit(colab)}
                      className="bg-yellow-500 text-white font-medium py-1 px-4 rounded-lg hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(colab.id)}
                      className="bg-red-500 text-white font-medium py-1 px-4 rounded-lg hover:bg-red-600"
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GerenciarColaboradores;