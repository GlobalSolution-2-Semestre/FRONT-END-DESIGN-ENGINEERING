import React, { useState } from 'react';

const Contato: React.FC = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado, ${form.nome}! Sua mensagem foi recebida (simulação).`);
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">Fale Conosco</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
          <input 
            type="text" 
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.nome}
            onChange={e => setForm({...form, nome: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
          <input 
            type="email" 
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
          <textarea 
            rows={4}
            required
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.mensagem}
            onChange={e => setForm({...form, mensagem: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contato;