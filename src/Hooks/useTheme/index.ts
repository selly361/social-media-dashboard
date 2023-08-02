import { useEffect, useState } from 'react'

export const useTheme = () => {

    const defaultTheme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    const [theme, setTheme] = useState(defaultTheme)

    
    useEffect(() => {
        
        localStorage.setItem("theme", theme)
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

    }, [theme])

    function toggleTheme(){
        setTheme(e => e == "dark" ? "light" : "dark")
    }
    

    return { toggleTheme, theme }
    
}
