import React from 'react'
// Uncomment the following line after installing react-helmet-async
// import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Khushwant Pratap Yadav - Software Development Engineer',
  description = 'Experienced Software Development Engineer specializing in Java, Spring Boot, AI technologies, and backend development. 3+ years of experience building enterprise applications, chatbots, and AI-powered solutions.',
  keywords = 'Software Engineer, Backend Developer, Java, Spring Boot, AI, Machine Learning, RAG Pipelines, LLM, React, Full Stack Developer, Khushwant Yadav',
  ogImage = '/src/assets/images/profile.jpg',
  canonicalUrl = 'https://khushwant-yadav.dev'
}) => {
  // Uncomment the following block after installing react-helmet-async
  /*
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph *\/}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card *\/}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL *\/}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
  */
  
  // Temporary return until react-helmet-async is installed
  return null
}

export default SEO

// Example usage in pages:
// <SEO 
//   title="About - Khushwant Pratap Yadav"
//   description="Learn more about my background, skills, and experience in software development"
//   canonicalUrl="https://khushwant-yadav.dev/about"
// />
