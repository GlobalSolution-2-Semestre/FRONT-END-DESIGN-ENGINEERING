import React, { useState } from 'react';
import { post } from '../../service/api'; 

const Contato: React.FC = () => {
  const [idColaborador, setIdColaborador] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('Dúvida'); 
  const [descricao, setDescricao] = useState(''); 
  
  const [status, setStatus] = useState<'ocioso' | 'enviando' | 'sucesso' | 'erro'>('ocioso');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');
    setFeedback('');

    try {
      const data = { 
        idColaborador: parseInt(idColaborador), 
        tipoAlerta, 
        descricao 
      };

      await post('/alerta', data); 

      setStatus('sucesso');
      setFeedback('Alerta enviado com sucesso! Entraremos em contato.');
      setIdColaborador('');
      setTipoAlerta('Dúvida');
      setDescricao('');
    } catch (err) { 
      console.error(err);
      if (err instanceof Error) {
        setFeedback(`Erro: ${err.message}`); 
      } else {
        setFeedback('Erro: Ocorreu um problema desconhecido.');
      }
      setStatus('erro');
    }
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Entre em Contato ou Envie um Alerta
      </h1>
      
      {}
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
        Precisa de ajuda ou tem uma dúvida? Envie um alerta para o RH.
      </p> 
      
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="idColaborador" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Seu ID de Colaborador (RM)
          </label>
          <input 
            type="number" 
            id="idColaborador" 
            placeholder="Ex: 562396"
            value={idColaborador}
            onChange={(e) => setIdColaborador(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tipoAlerta" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Assunto (Tipo de Alerta)
          </label>
          <select 
            id="tipoAlerta"
            name="tipoAlerta"
            value={tipoAlerta}
            onChange={(e) => setTipoAlerta(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Dúvida">Dúvida</option>
            <option value="Sobrecarga">Sobrecarga</option>
            <option value="Suporte Emocional">Suporte Emocional</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Mensagem (Descrição)
          </label>
          <textarea 
            id="descricao" 
            rows={4} 
            placeholder="Escreva sua dúvida ou solicitação..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            disabled={status === 'enviando'}
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg 
                       hover:bg-blue-700 transition-colors
                       disabled:bg-gray-400"
          >
            {status === 'enviando' ? 'Enviando...' : 'Enviar Alerta'}
          </button>
        </div>

        {feedback && (
          <p className={`mt-4 text-center ${status === 'sucesso' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {feedback}
          </p> 
        )}
      </form>
    </div>
  );
};

export default Contato;