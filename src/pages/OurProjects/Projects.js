import React from "react";
import "./Projects.css";
import Projects_panels from "./projects_panels.js";



const Projects = () => {
  return (
    <>
      <div id="panel_container">
        <div id="Main_container" className="Project_container">
          <Projects_panels />
        </div>
      </div>
    </>
  );
};

export default Projects;


