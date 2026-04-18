// Projects page component
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "URL Shortener Web Application",
      description: "Developed a web application to convert long URLs into short links with automatic redirection. Used PostgreSQL for storing URL mappings and implemented backend logic for generating and managing short URLs.",
      tech: ["Django", "PostgreSQL", "HTML", "CSS", "Git"],
      githubUrl: "https://github.com/kristinaHy/URL_Shortner",
      liveUrl: "#",
      status: "Completed",
      difficulty: "Intermediate",
      icon: "🔗"
    },
    {
      title: "SkillShareSpace",
      description: "Built SkillShareSpace, a minimalist Django-based Q&A platform inspired by Stack Overflow for small communities. Implemented user authentication, content approval workflow, and flagging system for moderated interactions.",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kristinaHy/skillsharespace",
      liveUrl: "#",
      status: "Completed",
      difficulty: "Advanced",
      icon: "💬"
    },
    {
      title: "Job Portal",
      description: "Designed and developed a job portal using Django and Python. Features include user authentication, CRUD operations, posting jobs, and applying for jobs.",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kristinaHy/job-portal",
      liveUrl: "#",
      status: "Completed",
      difficulty: "Intermediate",
      icon: "💼"
    },
    {
      title: "Personal Diary",
      description: "Designed and developed a personal diary web application using Django and Python. Features user authentication, creating/editing/deleting diary entries, and organizing entries by date.",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kristinaHy/personal-diary",
      liveUrl: "#",
      status: "Completed",
      difficulty: "Beginner",
      icon: "📓"
    },
    {
      title: "Contact Book",
      description: "Developed a Contact Book project to store, edit, and search contact details efficiently. Integrated API fetching to retrieve and update contact data dynamically.",
      tech: ["Python", "Git", "GitHub"],
      githubUrl: "https://github.com/kristinaHy/Contact-Book",
      liveUrl: "#",
      status: "Completed",
      difficulty: "Beginner",
      icon: "📱"
    },
    {
      title: "3B Pest Control Backend APIs",
      description: "Built backend APIs for 3B Pest Control using Django. Tested APIs thoroughly using Postman to ensure functionality, reliability, and correctness. Applied Git and GitHub for version control.",
      tech: ["Django", "REST APIs", "Postman", "Git"],
      githubUrl: "#",
      liveUrl: "https://www.threebpest.com.au/",
      status: "Completed",
      difficulty: "Intermediate",
      icon: "🐛"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my journey from backend-focused development to full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.difficulty === 'Beginner'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        : project.difficulty === 'Intermediate'
                        ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects.
              Whether it's backend API development or learning new frontend technologies, let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;