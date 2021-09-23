import { 
  BrowserRouter as Router, 
  Switch,
  Link,
  Route 
} from "react-router-dom";
import Home from "./components/Home";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/slideshow">Start Slideshow</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/slideshow">
          <Slideshow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
