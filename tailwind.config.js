/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7FAFC',
        'header': '#DCEEFB',
        'prbutton': '#00B4D8',
        'hover': '#0096C7',
        'icon': '#B7E4C7',
        'text': '#1E3A8A',
        
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

