import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import Ideas from "./pages/Ideas/Ideas";
import AboutPage from "./pages/About";
import OurTeam from './pages/OurTeam/OurTeam';
import Footer from './components/Footer';
import Events from './pages/Events/Events'
import RecruitmentPage from "./pages/Recruitment/Recruitment";
import Gallery from './pages/Gallery/Gallery';

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
                  <Footer />
              </Route>
              <Route path='/about' exact>
                  <AboutPage />
              </Route>
              <Route path='/ourteam' exact>
                  <OurTeam />
                  <Footer />
              </Route>
              <Route path='/recruitment' exact>
                  <RecruitmentPage />
                  <Footer/>
              </Route>
              <Route path='/gallery' exact>
                  <Gallery />
                  <Footer/>
              </Route>
              <Route path='/events' exact>
                  <Events />
                  <Footer/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
