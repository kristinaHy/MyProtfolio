// Home page component
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kristina Hyaunmikha</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Python Django Developer
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-2xl mx-auto lg:mx-0">
              Passionate Python Django developer with experience in building robust backend systems and REST APIs. Currently expanding skills in frontend development with React to create full-stack applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <Button variant="primary" className="w-full sm:w-auto">
                  View My Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
              <a
                href="/resume.pdf"
                download="Kristina_Hyaunmikha_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full sm:w-auto">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{animationDelay: '1s'}}>
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Django</div>
            <div className="text-gray-600 dark:text-gray-300">Specialty</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Python</div>
            <div className="text-gray-600 dark:text-gray-300">Expertise</div>
          </div>
        </div>

        {/* New feature section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
            What I Build
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-blue-50 dark:bg-blue-900/20 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Django Backend APIs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Robust backend systems built with Django, PostgreSQL, and REST APIs for scalable applications.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-green-50 dark:bg-green-900/20 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Full-Stack Web Apps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete web applications with Django backend, HTML/CSS frontend, and database integration.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-purple-50 dark:bg-purple-900/20 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Learning React</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently expanding frontend skills with React to create modern, interactive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;