import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Ideas from "./pages/Ideas/Ideas";
import AboutPage from "./pages/About";
import OurTeam from "./pages/OurTeam/OurTeam";
import Footer from "./components/Footer";
import RecruitmentPage from "./pages/Recruitment/Recruitment";
import Navbar from "./components/Navbar/Navbar";
import Events from "./pages/Events/Events";
import SideDrawer from "./components/Navbar/SideDrawer/SideDrawer";
import Gallery from "./pages/Gallery/Gallery";
import OurProjects from "./pages/OurProjects/Projects"
import { useState } from "react";
import ScrollToTop from './components/ScrollToTop';
import './styles/landing.css';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <div>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        {/*<ScrollToTop />*/}
        <Navbar hamburgerClicked={sideDrawerToggleHandler}/>
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/ideas" exact>
              <Ideas />
              <Footer />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/ourteam" exact>
              <OurTeam />
              <Footer />
            </Route>
            <Route path="/recruitment" exact>
              <RecruitmentPage />
              <Footer />
            </Route>
            <Route path="/events" exact>
              <Events />
              <Footer />
            </Route>
            <Route path="/achievements" exact>
              <Gallery/>
              <Footer />
            </Route>
            <Route path="/projects" exact>
              <OurProjects/>
              <Footer />
            </Route>
            <Route path="/*" exact>
              <HomePage />
              <Footer />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
