import './App.css';
import Header from "./Components/Header";
import HomeSlider from "./Components/HomeSlider";
import Movies from './Components/Movies';
import { MoviesProvider } from './Context';
import Footer from './Components/Footer';
import Register from './Components/Registration/Register';
import SinglePost from './Components/SinglePost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MoviesProvider>
          <div className="App">
            <div className="Home">
              <Header />
              <Switch>
                <Route path="/" exact>
                  <HomeSlider />
                  <Movies />
                </Route>
                <Route path="/registration" exact>
                  <Register />
                </Route>
                <Route path="/movies-shows/:name" exact>
                  <SinglePost />
                </Route>
              </Switch>
              <Footer />
            </div>
          </div>
        </MoviesProvider>
      </Router>
    </>
  );
}

export default App;
