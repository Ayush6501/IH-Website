import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Ideas from "./pages/Ideas/Ideas";
import AboutPage from "./pages/About";
import OurTeam from "./pages/OurTeam/OurTeam";
import Footer from "./components/Footer";
import RecruitmentPage from "./pages/Recruitment/Recruitment";
import Navbar from "./components/Navbar/Navbar";
import Events from "./pages/Events/Events";
import SideDrawer from "./components/Navbar/SideDrawer/SideDrawer";
<<<<<<< HEAD
import Gallery from "./pages/Gallery/Gallery";
=======
>>>>>>> origin/master
import { useState } from "react";

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
      <Router>
        <Navbar hamburgerClicked={sideDrawerToggleHandler}/>
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
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
<<<<<<< HEAD
          <Route path="/gallery" exact>
            <Gallery/>
            <Footer />
          </Route>
=======
>>>>>>> origin/master
        </Switch>
      </Router>
    </div>
  );
}

export default App;
