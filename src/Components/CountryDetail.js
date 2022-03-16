import React, { useState, useEffect,useContext } from "react";
import Country from "./Country";
import classes from "./CountryDetail.module.css"
import themeContext from "./ThemeContext";
import { useParams } from "react-router-dom";
const CountryDetail = () => {
  const {theme,setTheme} = useContext(themeContext)
  const [apiData, setCountryData] = useState(null);
  const params = useParams()
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountryData(data[0]) )
  }, []); 
  return (
    <div className={`${theme === "dark" && classes.dark} ${classes.country_detail}`}>
      {apiData ? (
          <Country 
          name={apiData.name}
          nativeName={apiData.nativeName}
          population={apiData.population}
          region={apiData.region}
          subRegion={apiData.subregion}
          capital={apiData.capital}
          topLevelDomain={apiData.topLevelDomain.toString()}
          currencies={apiData ?apiData.currencies[0].name:""}
          languages={apiData.languages}
          flag={apiData.flag}
          borders={apiData.borders}
          />
      ):<h2 className={classes.h2}>Loading...</h2>}
    </div>
  );
};

export default CountryDetail;
