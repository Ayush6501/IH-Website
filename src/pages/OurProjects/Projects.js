import React from "react";
import "./Projects.css";
import Projectpanel from "./projectpanel.js";
import { useLocation } from "react-router-dom";
import {useRef, useEffect} from 'react';

const Projects = () => {
    const routePath = useLocation();
    const ref = useRef();

    useEffect(() => {
        if (routePath.pathname === "/projects") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath])

  return (
    <>
      <div id="panel_container">
        <div id="Main_container" ref={ref} className="Project_container">
          <Projectpanel />
        </div>
      </div>
    </>
  );
};

export default Projects;


