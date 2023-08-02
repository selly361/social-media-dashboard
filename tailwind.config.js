/** @type {import('tailwindcss').Config} */

module.exports = {
  
  darkMode: "class",
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {        
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "youtube": "hsl(348, 97%, 39%)",
        "instagram": "var(--instagram-gradient)",
        "lightToggle": "hsl(230, 22%, 74%)",
      },
      
      textColor: {

        /* Shared */
        
        "limeGreen": "hsl(163, 72%, 41%)",
        "brightRed": "hsl(356, 69%, 56%)",

        /* Dark mode */

        "primaryDark": "hsl(0, 0%, 100%)",
        "secondaryDark": "hsl(228, 34%, 66%)",

        /* Light mode */
        
        "primaryLight": "hsl(230, 17%, 14%)",
        "secondaryLight": "hsl(228, 12%, 44%)",
        
      },
      
      backgroundColor: {

        /* Dark mode */
        
        "topBgDark": "hsl(232, 19%, 15%)",
        "bgDark": "hsl(230, 17%, 14%)",
        "cardBgDark": "hsl(228, 28%, 20%)",

        /* Light mode */
        
        "topBgLight": "hsl(225, 100%, 98%)",
        "bgLight": "hsl(0, 0%, 100%)",
        "cardBgLight": "hsl(227, 47%, 96%)"

      },
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      
      fontWeight: {
        "400": 400, 
        "700": 700, 
      },
      
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1440px',
      }
    }
  },
  
  plugins: [],
  
}
