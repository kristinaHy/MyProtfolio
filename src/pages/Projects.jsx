// Projects page component
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Q&A Platform",
      description: "A web-based Q&A platform built with Django and Django REST Framework. Users can post questions, answer them, and interact through a structured API.",
      tech: ["Django", "DRF", "React (basic)"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Blog API App",
      description: "A blog system with full CRUD functionality using Django REST Framework and a simple React frontend.",
      tech: ["Django", "DRF", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Manager",
      description: "A simple task management app to practice React concepts like state, components, and API integration.",
      tech: ["React", "Django API"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;