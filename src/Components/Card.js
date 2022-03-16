import React,{useContext} from 'react'
import classes from "./Card.module.css"
import themeContext from './ThemeContext'
const Card = (props) => {
  const [theme,setTheme] = useContext(themeContext)
  return (
    <div className={`${classes.card} ${theme === "dark" && classes.dark}`}>
        <div className={classes.flag}>
            <img src={props.country.flag} alt="" />
        </div>
        <div className={classes.info}>
            <h4>{props.country.name}</h4>
            <p><span>Population:</span>{props.country.population}</p>
            <p><span>Region:</span>{props.country.region}</p>
            <p><span>Capital:</span>{props.country.capital}</p>
        </div>
    </div>
  )
}

export default Card