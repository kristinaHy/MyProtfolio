// Home page component
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 fade-in">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Your Name
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Backend-focused developer using Django, currently learning React
        </h2>

        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          I build backend systems using Django and REST APIs, and I am currently expanding into frontend development with React.
        </p>

        <Link to="/projects">
          <Button variant="primary">
            View My Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;