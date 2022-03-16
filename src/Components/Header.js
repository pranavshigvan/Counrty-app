import React,{ useContext} from 'react'
import classes from "./Header.module.css"
import themeContext from './ThemeContext'
const Header = () => {
  const [theme,setTheme] = useContext(themeContext)
  return (
    <header className={theme === "dark" && classes.dark}>
        <h1>Where in the world?</h1>
        <button onClick={()=>{
          setTheme( theme => {
            if(theme === "dark"){
              localStorage.setItem("countryTheme","light")
              return "light"
            }else{
              localStorage.setItem("countryTheme","dark")
              return "dark"
            }
          })
        }}>{theme === "dark" ? "Light mode":"Dark mode"}</button>
    </header>
  )
}

export default Header