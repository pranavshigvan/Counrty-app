import React,{useState,useEffect} from "react";

const  countriesContext = React.createContext()


export const CountriesContextProvider = (props)=>{
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name,capital,currencies,population,region,nativeName,subRegion,flag,topLevelDomain,languages,borderCountries")
        .then( res => res.json())
        .then( data => setApiData(data));
    }, [])
    
    return (
        <countriesContext.Provider value={apiData}>
            {props.children}
        </countriesContext.Provider>
    )
}

export default countriesContext