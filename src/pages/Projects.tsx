import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Software Asset Management System',
      description: 'Enterprise-grade asset tracking system with real-time monitoring, automated reporting, and comprehensive analytics. Built for large organizations to manage their software licenses, hardware inventory, and compliance requirements.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Microservices', 'Docker'],
      features: [
        'Real-time asset tracking and monitoring',
        'Automated compliance reporting',
        'License management and optimization',
        'Advanced analytics and dashboards',
        'Multi-tenant architecture',
        'Integration with existing enterprise systems'
      ],
      category: 'Enterprise Software',
      status: 'Completed',
      duration: '8 months',
      imageAlt: 'Software Asset Management System Dashboard Screenshot'
    },
    {
      title: 'IT Asset Management Platform',
      description: 'Comprehensive IT infrastructure management platform that provides centralized control over hardware, software, and network resources. Features include automated discovery, lifecycle management, and cost optimization.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Elasticsearch', 'Angular', 'Docker'],
      features: [
        'Automated asset discovery and classification',
        'Lifecycle management workflows',
        'Cost tracking and optimization',
        'Vendor management integration',
        'Compliance monitoring and reporting',
        'Mobile app for field technicians'
      ],
      category: 'Enterprise Software',
      status: 'In Production',
      duration: '12 months',
      imageAlt: 'IT Asset Management Platform Interface'
    },
    {
      title: 'School ERP Mobile Application',
      description: 'Complete school management solution with mobile apps for students, teachers, and parents. Includes attendance tracking, grade management, communication tools, and administrative features.',
      technologies: ['Flutter', 'Native Android', 'Firebase', 'Node.js', 'MongoDB', 'Push Notifications'],
      features: [
        'Student attendance and grade tracking',
        'Parent-teacher communication portal',
        'Assignment and homework management',
        'Fee payment integration',
        'Event and announcement system',
        'Offline capability for remote areas'
      ],
      category: 'Mobile Application',
      status: 'Completed',
      duration: '6 months',
      imageAlt: 'School ERP Mobile App Screenshots'
    },
    {
      title: 'AI Chatbot with RAG Pipeline',
      description: 'Intelligent conversational AI system using Large Language Models and Retrieval-Augmented Generation. Provides context-aware responses by combining real-time data retrieval with advanced language understanding.',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Vector Database', 'FastAPI', 'Redis', 'Elasticsearch'],
      features: [
        'Context-aware conversation handling',
        'Real-time knowledge base integration',
        'Multi-language support',
        'Custom training on domain-specific data',
        'Analytics and conversation insights',
        'Scalable deployment architecture'
      ],
      category: 'AI/Machine Learning',
      status: 'Ongoing Development',
      duration: '4 months',
      imageAlt: 'AI Chatbot Interface with RAG Pipeline Architecture'
    },
    {
      title: 'Semantic Search Engine',
      description: 'Advanced search system using text embeddings and semantic understanding to provide more accurate and contextual search results. Implemented for enterprise document management.',
      technologies: ['Python', 'Elasticsearch', 'BERT', 'FastAPI', 'Docker', 'React'],
      features: [
        'Semantic similarity search',
        'Multi-modal search (text, images, documents)',
        'Auto-completion and query suggestions',
        'Search analytics and optimization',
        'Integration with existing databases',
        'Real-time indexing and updates'
      ],
      category: 'AI/Machine Learning',
      status: 'Completed',
      duration: '5 months',
      imageAlt: 'Semantic Search Engine Results Interface'
    },
    {
      title: 'Microservices E-Commerce Platform',
      description: 'Scalable e-commerce backend built with microservices architecture. Handles high-traffic loads with features like inventory management, payment processing, and order tracking.',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      features: [
        'Product catalog and inventory management',
        'Payment gateway integration',
        'Order processing and tracking',
        'Customer management system',
        'Analytics and reporting dashboard',
        'API gateway and service mesh'
      ],
      category: 'E-Commerce',
      status: 'In Production',
      duration: '10 months',
      imageAlt: 'E-Commerce Platform Admin Dashboard'
    }
  ]

  const categories = ['All', 'Enterprise Software', 'Mobile Application', 'AI/Machine Learning', 'E-Commerce']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of enterprise applications, AI solutions, and mobile apps I've developed
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {project.category === 'AI/Machine Learning' ? '🤖' :
                     project.category === 'Mobile Application' ? '📱' :
                     project.category === 'E-Commerce' ? '🛒' : '💼'}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.imageAlt}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          project.status === 'Completed' ? 'bg-green-500' :
                          project.status === 'In Production' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></span>
                        {project.status}
                      </span>
                      <span>⏱️ {project.duration}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and build innovative solutions. 
            Let's discuss how I can help bring your project ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="/experience"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
