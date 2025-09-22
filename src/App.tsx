import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Education = React.lazy(() => import('./pages/Education'))
const Contact = React.lazy(() => import('./pages/Contact'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Router basename="">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
