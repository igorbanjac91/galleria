import { 
  BrowserRouter as Router, 
  Switch,
  Link,
  Route 
} from "react-router-dom";
import Home from "./components/Home";

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
              <Link to="/slideshow">Logo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/slideshow">
          <SlideShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
