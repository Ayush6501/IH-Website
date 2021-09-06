import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import Ideas from "./pages/Ideas/Ideas";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/' exact>
                  <HomePage />
              </Route>
              <Route path='/ideas' exact>
                  <Ideas />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
