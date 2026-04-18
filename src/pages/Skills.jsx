// Skills page component
const Skills = () => {
  const backendSkills = [
    { name: "Django", level: 90, icon: "🌀" },
    { name: "Django REST Framework", level: 85, icon: "🔗" },
    { name: "API Development", level: 88, icon: "🌐" }
  ];

  const frontendSkills = [
    { name: "React", level: 45, icon: "⚛️", note: "Beginner - Actively Learning" },
    { name: "HTML", level: 80, icon: "🏗️" },
    { name: "CSS", level: 75, icon: "🎨" },
    { name: "JavaScript", level: 70, icon: "📜" }
  ];

  const tools = [
    { name: "Git", level: 85, icon: "📚" },
    { name: "Postman", level: 80, icon: "📮" }
  ];

  const SkillBar = ({ skill, showLevel = true }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
          {skill.note && (
            <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">
              {skill.note}
            </span>
          )}
        </div>
        {showLevel && (
          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
        )}
      </div>
      {showLevel && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise and learning journey in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Backend</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My core strength lies in building robust backend systems with Django and REST APIs.
            </p>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Frontend</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently expanding my frontend skills with React and modern web technologies.
            </p>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tools</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Essential development tools and technologies I use daily.
            </p>
            <div className="space-y-4">
              {tools.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            🚀 Learning Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Current Focus</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Advanced React patterns and hooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  State management with Context API
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Modern CSS frameworks and animations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Future Goals</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TypeScript integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Advanced Django features
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Cloud deployment and DevOps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;