import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        MindTrack
      </h1>

      <div className="flex gap-6 text-gray-800 dark:text-gray-200 font-medium">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded-lg text-sm dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
