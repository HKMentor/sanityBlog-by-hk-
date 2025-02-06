/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add the paths to all files where you will use Tailwind classes
    './pages/**/*.{js,ts,jsx,tsx}', // Pages folder
    './components/**/*.{js,ts,jsx,tsx}', // Components folder
    './app/**/*.{js,ts,jsx,tsx}', // If using the `app` directory in Next.js
  ],
  theme: {
    extend: {
      // Here you can extend the default Tailwind theme with custom configurations
      colors: {
        // Example: add custom colors
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      spacing: {
        // Example: add custom spacing values
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    // Example: Adding Tailwind plugins
    // require('@tailwindcss/forms'), // If you want forms plugin
    // require('@tailwindcss/typography'), // If you want typography plugin
  ],
}

