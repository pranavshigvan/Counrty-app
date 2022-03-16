import React,{useContext} from "react";
import classes from "./Country.module.css";
import { Link } from "react-router-dom";
import themeContext from "./ThemeContext";
const Country = (props) => {
  const [theme,setTheme] = useContext(themeContext)
  let languages = "";
  props.languages.forEach((item) => {
    if (languages === "") {
      languages += item.name;
    } else {
      languages += `,${item.name}`;
    }
  });
  console.log(props.border)
  return (
    <div className={`${classes.country_detail} ${theme === "dark" && classes.dark}`}>
      <button className={classes.back_btn}><Link to="/">Back</Link></button>
      <div className={classes.country}>
        <div className={classes.flag}>
          <img src={props.flag} alt="" />
        </div>
        <div className={classes.info}>
          <h2 className={classes.heading}>{props.name}</h2>
          <div className={classes.information}>
            <div>
              <p>
                <span>Native Name:</span>
                {props.nativeName}
              </p>
              <p>
                <span>Population:</span>
                {props.population}
              </p>
              <p>
                <span>Region:</span>
                {props.region}
              </p>
              <p>
                <span>Sub Region:</span>
                {props.subRegion}
              </p>
              <p>
                <span>Captial:</span>
                {props.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span>
                {props.topLevelDomain}
              </p>
              <p>
                <span>Currencies:</span>
                {props.currencies}
              </p>
              <p>
                <span>Languages:</span>
                {languages}
              </p>
            </div>
          </div>
          <div className={classes.borders}>
            <p><span>Border Countries</span></p>
            <div>
              {props.borders ? props.borders.map( border => <span key={Math.random().toString()}>{border}</span>):<p>No borders shared</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
