/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fill: '#1B2336',
        primary: '#2C6FD9',
        fade: '#A4ABB5',
        background: '#E5E5E5',
        text: '#555B6E',
        accent: '#258060',
        border: '#B8BBC6',
        
      },
    }
  },
  plugins: []
}

