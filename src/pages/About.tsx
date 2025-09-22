import React from 'react'
import ThemeDemo from '../components/ThemeDemo'

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with expertise in backend development and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">Name:</span>
                  <span className="text-gray-700 dark:text-gray-300">Khushwant Pratap Yadav</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Kushinagar, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">Phone:</span>
                  <span className="text-gray-700 dark:text-gray-300">+91 8858013899</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300">yadavkhushwant777@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">DOB:</span>
                  <span className="text-gray-700 dark:text-gray-300">01 July 1999</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold w-24">Languages:</span>
                  <span className="text-gray-700 dark:text-gray-300">English, Hindi</span>
                </div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills Overview
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'Kotlin', 'Dart', 'JavaScript', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Backend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'Microservices', 'REST APIs', 'MySQL', 'PostgreSQL', 'Elasticsearch'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">AI & Machine Learning</h3>
                  <div className="flex flex-wrap gap-2">
                    {['LLMs', 'RAG Pipelines', 'AI Agents', 'Prompt Engineering', 'Semantic Search'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Story */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Summary
              </h2>
              <div className="prose dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I am an experienced Back-end Developer with a strong foundation in Java, Spring Boot, and cutting-edge AI technologies. 
                  My passion lies in building scalable, efficient systems that solve real-world problems through innovative technology solutions.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Currently working at Zionit Software Pvt Ltd in Pune, I have been instrumental in developing enterprise-grade applications, 
                  AI-powered chatbots, and implementing large language models with RAG pipelines to enhance application functionality.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My expertise spans across various domains including enterprise software development, mobile application development with 
                  Flutter and native Android, and modern DevOps practices with Docker and CI/CD pipelines.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I Bring to the Table:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>3+ years of hands-on experience in software development</li>
                  <li>Expertise in building scalable microservices architectures</li>
                  <li>Deep knowledge of AI/ML integration in enterprise applications</li>
                  <li>Strong problem-solving and analytical thinking abilities</li>
                  <li>Experience leading backend development teams</li>
                  <li>Proficiency in modern development practices and DevOps</li>
                </ul>
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Interests & Values
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Innovation</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">AI Technology</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Continuous Learning</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Problem Solving</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Demo Section */}
        <div className="mt-16">
          <ThemeDemo />
        </div>
      </div>
    </div>
  )
}

export default About
