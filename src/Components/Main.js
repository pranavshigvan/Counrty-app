import React,{useContext,useState} from 'react'
import Search from './Search'
import Filter from './Filter'
import Card from './Card'
import classes from "./main.module.css"
import countriesContext from './CountriesContext'
import { Link } from 'react-router-dom'
import themeContext from './ThemeContext'
const Main = (props) => {
  const countriesData = useContext(countriesContext)
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState("all")
  const [theme,setTheme] = useContext(themeContext)
  let data = [...countriesData]
  if (filter !== "all") {
    data = data.filter( item => {
      return item.region.toLowerCase() === filter.toLowerCase()
    })
    console.log(filter)
  }
  if (searchText) {
    data = data.filter( item =>{
      return searchText.toLowerCase() === item.name.slice(0,searchText.length).toLowerCase()
    })
  }

  return (
    <main className={theme === "dark" && classes.dark}>
        <nav>
            <Search value={searchText} setValue={setSearchText  }/>
            <Filter setFilter={setFilter}/>
        </nav>
        <div id="countries" className={classes.countries}>
          {data.length !== 0 ? data.map( country => <Link to={`/${country.name}`} key={Math.random().toString()}><Card country={country} /></Link>):<h1>Loading...</h1>}
        </div>
    </main>
  )

}

export default Main