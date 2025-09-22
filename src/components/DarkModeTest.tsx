import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const DarkModeTest: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  React.useEffect(() => {
    console.log('Dark mode state:', isDarkMode)
    console.log('HTML class list:', document.documentElement.classList.toString())
  }, [isDarkMode])

  return (
    <div className="p-4 m-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        Dark Mode Test Component
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Current mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
      </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
      >
        Toggle Theme
      </button>
      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This box should change color when you toggle the theme.
        </p>
      </div>
    </div>
  )
}

export default DarkModeTest
