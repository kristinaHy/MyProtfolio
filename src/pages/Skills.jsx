// Skills page component
const Skills = () => {
  const backendSkills = [
    "Django",
    "Django REST Framework",
    "API Development"
  ];

  const frontendSkills = [
    "React (Beginner)",
    "HTML",
    "CSS",
    "JavaScript"
  ];
  
  const frontendNote = "I am continuing to learn React and build interfaces that connect with backend APIs.";

  const tools = [
    "Git",
    "Postman"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 fade-in">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          My Skills
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Backend</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {backendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">I focus on backend APIs, Django architecture, and clean data models.</p>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Frontend</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {frontendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">{frontendNote}</p>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tools</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">I use Git for version control and Postman for API testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;