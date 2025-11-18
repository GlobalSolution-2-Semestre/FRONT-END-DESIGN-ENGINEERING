import { Link } from 'react-router-dom';

export default function Cabecalho() {
  return (
    
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              MindTrack
            </Link>
          </div>

          {}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/sobre" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre
              </Link>
              <Link to="/integrantes" className="hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Integrantes
              </Link>
              <Link to="/faq" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link to="/contato" className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contato
              </Link>
              {}
              <Link to="/admin" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Admin
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}