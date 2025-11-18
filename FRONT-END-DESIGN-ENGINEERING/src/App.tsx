import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext'; 
import Home from './routes/home/index'; 
import Sobre from './routes/sobre/index';
import Integrantes from './routes/integrantes/index';
import Contato from './routes/contato/index';
import FAQ from './routes/faq/index';
import AdminGeral from './routes/adminGeral/index';

function App() {
  const { theme, toggleTheme } = useTheme(); 
  return (
    <BrowserRouter>
      {}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {}
        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  MindTrack
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link to="/" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                  <Link to="/sobre" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre</Link>
                  <Link to="/integrantes" className="hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Integrantes</Link>
                  <Link to="/faq" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
                  <Link to="/contato" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contato</Link>
                  <Link to="/admin" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Admin</Link>
                  
                  {}
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors hover:opacity-80 ml-4 border dark:border-gray-600"
                    title="Alternar Tema Claro/Escuro"
                  >
                    {theme === 'dark' ? '☀️' : '🌙'}
                  </button>

                </div>
              </div>
            </div>
          </div>
        </nav>

        {}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin" element={<AdminGeral />} />
          </Routes>
        </div>

        {}
        <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-auto py-6 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 MindTrack Solutions. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Global Solution - FIAP</p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;