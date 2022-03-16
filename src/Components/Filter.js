import React,{useState,useContext} from 'react'
import classes from "./Filter.module.css"
import themeContext from './ThemeContext'
const Filter = (props) => {
  const [showRegions, setShowRegions] = useState(false)
  const [theme,setTheme] = useContext(themeContext)
  const setFilter = filter =>{
    props.setFilter(filter)
  }
  return (
        <div  id="filter" className={`${classes.filter} ${theme === "dark" && classes.dark}`}>
          <span onClick={()=>{setShowRegions( prevState => !prevState)}}>Filter by Region</span>
          <div id="regions" className={classes.regions} style={{display:showRegions ? "block":"none"}}>
            <button className={classes.region} onClick={()=>{setFilter("all")}}>All</button>
            <button className={classes.region} onClick={()=>{setFilter("africa")}}>Africa</button>
            <button className={classes.region} onClick={()=>{setFilter("americas")}}>America</button>
            <button className={classes.region} onClick={()=>{setFilter("asia")}}>Asia</button>
            <button className={classes.region} onClick={()=>{setFilter("europe")}}>Europe</button>
            <button className={classes.region} onClick={()=>{setFilter("oceania")}}>Oceania</button>
          </div>
          
        </div>
  )
}

export default Filter