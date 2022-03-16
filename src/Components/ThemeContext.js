import React,{useState} from "react";

const themeContext = React.createContext()

const savedTheme = localStorage.getItem("countryTheme") ? localStorage.getItem("countryTheme") : "light"
export const ThemeProvider = (props)=>{
    const [theme, setTheme] = useState(savedTheme)
    return (
        <themeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </themeContext.Provider>
    )
}

export default themeContext