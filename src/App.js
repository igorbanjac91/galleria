import { 
  BrowserRouter as Router, 
  Switch,
  Link,
  Route 
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <Router>
      <Header />
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
