import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home-Page/Home';
import Navigation from './Components/Home-Page/Navigation/Navigation';
import Footer from './Components/Home-Page/Footer/Footer';
import Error from './Components/Error-Page/Error';
import Contact from './Components/Contact-Page/Contact';
import About from './Components/About-Page/About';
import Courses from './Components/Courses-Page/Courses';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/courses">
            <Courses></Courses>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
