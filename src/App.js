import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/'>
                  <HomePage />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
