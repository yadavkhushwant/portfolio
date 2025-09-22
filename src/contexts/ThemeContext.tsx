import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      let shouldBeDark = false
      
      // Check localStorage first
      const saved = localStorage.getItem('theme')
      if (saved) {
        shouldBeDark = saved === 'dark'
      } else {
        // Check system preference if no saved preference
        shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      
      setIsDarkMode(shouldBeDark)
      
      // Apply theme to document
      if (shouldBeDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      console.log('Theme initialized:', shouldBeDark ? 'dark' : 'light')
    }

    initializeTheme()
  }, [])

  // Apply theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    
    // Apply to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    console.log('Theme applied:', isDarkMode ? 'dark' : 'light', 'HTML classes:', document.documentElement.className)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      console.log('Theme toggled to:', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
