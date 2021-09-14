import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import Ideas from "./pages/Ideas/Ideas";
import AboutPage from "./pages/About";


function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route path='/' exact>
                  <HomePage />
              </Route>
              <Route path='/ideas' exact>
                  <Ideas />
              </Route>
              <Route path='/about' exact>
                  <AboutPage />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
