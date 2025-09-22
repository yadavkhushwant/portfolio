import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
            isDarkMode 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            isDarkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  )
}

export default DarkModeToggle
