// Navbar component with navigation links
// Uses React Router's Link for navigation
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Your Name
        </Link>

        <div className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link to="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">
            Skills
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;