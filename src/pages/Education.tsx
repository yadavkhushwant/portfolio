import React from 'react'

const Education: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and professional certifications in computer science and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Academic Qualifications
            </h2>

            {/* MCA */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Master of Computer Application (MCA)
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Guru Ghasidas Vishwavidyalaya
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Bilaspur, Chhattisgarh, India
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    2022 - 2024
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    8.04
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    CGPA
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Subjects & Areas of Study:</h5>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Advanced Java Programming
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Software Engineering
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Web Technologies
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Computer Networks
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Operating Systems
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      Machine Learning Basics
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Academic Achievements:
                </h5>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• Graduated with Distinction (8.04/10 CGPA)</li>
                  <li>• Consistently ranked in top 10% of the class</li>
                  <li>• Completed major project on "AI-Powered Enterprise Solutions"</li>
                  <li>• Active participant in coding competitions and tech symposiums</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Certifications
            </h2>

            {/* HackerRank Java Certificate */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Java Programming Certification
                  </h3>
                  <h4 className="text-lg text-green-600 dark:text-green-400 font-medium mb-2">
                    HackerRank
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive certification covering core Java concepts, OOP principles, 
                    data structures, and advanced programming techniques.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      Certification Skills Validated:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Core Java', 'OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="http://bit.ly/kpyJavaCert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900 transition-colors duration-200"
                    aria-label="View Java Programming Certificate on HackerRank"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Learning & Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Continuous Learning & Development
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Self-Directed Learning:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>AI/ML Specialization:</strong> Deep dive into Large Language Models, RAG pipelines, and AI agents through practical projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Cloud Technologies:</strong> Hands-on experience with Azure, Docker containerization, and CI/CD best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Modern Frameworks:</strong> Advanced Spring Boot, React ecosystem, and mobile development with Flutter</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Professional Development:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl mb-2">📚</div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Technical Reading</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Regular study of tech blogs, documentation, and research papers</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl mb-2">💡</div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Innovation Projects</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Personal projects exploring cutting-edge technologies</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl mb-2">🤝</div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Community Engagement</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Active participation in developer communities and forums</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Goal-Oriented Learning</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Structured approach to acquiring new skills and technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Learning Goals */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Future Learning Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Advanced AI Certifications
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pursuing specialized certifications in machine learning and AI engineering from leading platforms
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Cloud Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Azure and AWS architect certifications to master cloud-native application development
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Security Specialization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cybersecurity and secure coding practices to build robust, enterprise-grade applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
