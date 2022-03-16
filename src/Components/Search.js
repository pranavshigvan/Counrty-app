import React,{useContext} from 'react'
import classes from "./Search.module.css"
import themeContext from './ThemeContext'
const Search = (props) => {
  const [theme,setTheme] = useContext(themeContext)
  return (
    <form action="" className={theme === "dark" && classes.dark}>
      <input type="text" placeholder='Search for a country...' onChange={(e)=>{props.setValue(e.target.value)}} value={props.value}/>
    </form>
  )
}

export default Search