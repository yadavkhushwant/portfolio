import React from 'react'

const Experience: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in software development and the projects I've contributed to
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          {/* Experience Entry */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            
            {/* Content */}
            <div className="ml-20">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Software Engineer
                    </h2>
                    <h3 className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      Zionit Software Pvt Ltd, Pune
                    </h3>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Jan 2022 – Present
                    </span>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities & Achievements:
                  </h4>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>
                        <strong>Team Collaboration:</strong> Collaborated effectively with cross-functional teams as a backend developer, 
                        contributing to various enterprise-level projects and ensuring seamless integration across different modules.
                      </span>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>
                        <strong>Leadership & Project Management:</strong> Led backend development efforts for multiple high-impact projects, 
                        including intelligent chatbots and enterprise applications, managing timelines and technical requirements.
                      </span>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>
                        <strong>AI Integration:</strong> Implemented cutting-edge large language models (LLMs) and Retrieval-Augmented 
                        Generation (RAG) pipelines to enhance application functionality and provide intelligent user interactions.
                      </span>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>
                        <strong>API Development & Integration:</strong> Designed and integrated robust third-party APIs and services, 
                        enhancing application functionality and improving user experience across multiple platforms.
                      </span>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>
                        <strong>Semantic Search Implementation:</strong> Applied advanced text embedding techniques for implementing 
                        semantic searching features, improving search accuracy and user query understanding.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies & Tools Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Java', 'Spring Boot', 'Python', 'LLMs', 'RAG Pipelines', 
                        'Elasticsearch', 'MySQL', 'PostgreSQL', 'REST APIs', 
                        'Microservices', 'Docker', 'Git', 'CI/CD'
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Notable Projects During This Role:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                        <h5 className="font-semibold text-gray-900 dark:text-white">AI Chatbot Development</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Built intelligent chatbots using LLMs and RAG for enhanced customer interactions
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                        <h5 className="font-semibold text-gray-900 dark:text-white">Enterprise Applications</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Developed scalable backend systems for asset management and ERP solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Developed Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills Developed Through Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Backend Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing scalable microservices architectures and RESTful APIs with proper authentication and authorization.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing LLMs, RAG pipelines, and AI agents to create intelligent applications with enhanced capabilities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Team Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leading development teams, managing project timelines, and ensuring code quality through best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analytical thinking and systematic approach to debugging complex issues and optimizing system performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Performance Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Database optimization, caching strategies, and system performance tuning for high-traffic applications.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Staying updated with latest technologies, attending workshops, and implementing cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 dark:bg-blue-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in My Professional Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and sharing insights about my experience in software development and AI technologies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experience
