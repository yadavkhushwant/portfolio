import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeDemo: React.FC = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🌓 Dark Mode Theme Preview
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Current theme: <span className="font-semibold">{isDarkMode ? 'Dark' : 'Light'}</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Example Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example Card</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This demonstrates how content looks in both light and dark modes.
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
              Sample Button
            </button>
          </div>

          {/* Color Palette */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Color Palette</h4>
            <div className="grid grid-cols-4 gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded"></div>
              <div className="w-8 h-8 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dark Mode Features:</h4>
          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
            <li>✅ Respects system theme preference</li>
            <li>✅ Remembers user selection in localStorage</li>
            <li>✅ Smooth transitions between themes</li>
            <li>✅ Accessible color contrasts</li>
            <li>✅ Mobile-friendly toggle button</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThemeDemo
