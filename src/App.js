import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Instructors from "./components/Insructors/Instructors";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import SingleInstructor from "./components/SingleInstructor/SingleInstructor";

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/Instructors">
            <Instructors />
          </Route>
          <Route exact path="/Instructors/:id">
            <SingleInstructor />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;