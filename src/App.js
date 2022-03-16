import Header from "./Components/Header";
import Main from "./Components/Main";
import CountryDetail from "./Components/CountryDetail";
import { CountriesContextProvider } from "./Components/CountriesContext";
import { ThemeProvider } from "./Components/ThemeContext";
import "./App.css";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <CountriesContextProvider>
        <ThemeProvider>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/:name">
              <CountryDetail />
            </Route>
          </Switch>
        </ThemeProvider>
      </CountriesContextProvider>
    </div>
  );
}

export default App;
