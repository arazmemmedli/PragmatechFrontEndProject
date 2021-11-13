import React from 'react'
import { useState } from 'react';
import { DarkProvider } from './context';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Layout from './Components/Layout';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Router>
        <DarkProvider value={{
          darkMode,
          setDarkMode
        }}>
          <div className="App" style = {darkMode ? {backgroundColor: "#000"} : {backgroundColor:"#fff"}}>
            <Header />
            <Layout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/team/:name" exact>
                  <Team />
                </Route>
              </Switch>
            </Layout>
          </div>
        </DarkProvider>
      </Router>
    </>
  )
}

export default App;