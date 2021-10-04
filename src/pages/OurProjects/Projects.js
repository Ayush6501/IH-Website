import React from "react";
import "./Projects.css";
import Projectpanel from "./projectpanel.js";



const Projects = () => {
  return (
    <>
      <div id="panel_container">
        <div id="Main_container" className="Project_container">
          <Projectpanel />
        </div>
      </div>
    </>
  );
};

export default Projects;


