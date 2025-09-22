import React from 'react'
import DarkModeTest from '../components/DarkModeTest'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  Khushwant Yadav
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Software Development Engineer
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl">
                Experienced Back-end Developer with proficiency in Java, Spring Boot, and AI technologies. 
                Skilled in implementing large language models and RAG pipelines with hands-on experience 
                in Elasticsearch for semantic searching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <img
                      src="/src/assets/images/profile.jpg"
                      alt="Khushwant Pratap Yadav - Software Development Engineer"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden text-6xl text-gray-400">👨‍💻</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  ☕
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-xl">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">10+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">100%</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized in backend development with modern technologies and AI integration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Java', color: 'bg-red-100 text-red-800' },
              { name: 'Spring Boot', color: 'bg-green-100 text-green-800' },
              { name: 'Python', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'AI/ML', color: 'bg-purple-100 text-purple-800' },
              { name: 'React', color: 'bg-blue-100 text-blue-800' },
              { name: 'Docker', color: 'bg-indigo-100 text-indigo-800' }
            ].map((skill) => (
              <div
                key={skill.name}
                className={`${skill.color} px-4 py-2 rounded-lg text-center font-medium transition-transform hover:scale-105`}
              >
                {skill.name}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some of my notable work in enterprise software development and AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Software Asset Management',
                description: 'Enterprise-grade asset tracking system with real-time monitoring and reporting capabilities.',
                tech: ['Java', 'Spring Boot', 'MySQL'],
                color: 'border-blue-200'
              },
              {
                title: 'AI Chatbot with RAG',
                description: 'Intelligent chatbot using LLMs and Retrieval-Augmented Generation for enhanced responses.',
                tech: ['Python', 'LLM', 'RAG'],
                color: 'border-purple-200'
              },
              {
                title: 'School ERP Mobile App',
                description: 'Comprehensive mobile application for school management with Flutter and native Android.',
                tech: ['Flutter', 'Android', 'Firebase'],
                color: 'border-green-200'
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-lg border-2 ${project.color} p-6 hover:shadow-lg transition-shadow duration-200`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </section>
      {/* Dark Mode Test - Temporary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DarkModeTest />
      </div>
    </div>
  )
}

export default Home
