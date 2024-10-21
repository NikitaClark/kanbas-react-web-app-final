import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database"; // Import modules from the database
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import "./styles.css"; // Ensure you have appropriate CSS styles

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Filter modules based on the selected course ID (cid)
  const filteredModules = db.modules.filter((module) => module.course === cid);

  return (
    <div className="container-fluid">
      {/* Control buttons */}
      <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">
        <button onClick={toggleCollapse} className="btn btn-outline-primary">
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button className="btn btn-outline-secondary">View Progress</button>

        {/* Dropdown for Publish All */}
        <div className="dropdown">
          <button className="btn btn-outline-success dropdown-toggle" type="button" id="publishDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Publish All
          </button>
          <ul className="dropdown-menu" aria-labelledby="publishDropdown">
            <li><a className="dropdown-item" href="#">Publish all modules and items</a></li>
            <li><a className="dropdown-item" href="#">Publish modules only</a></li>
            <li><a className="dropdown-item" href="#">Unpublish all modules and items</a></li>
            <li><a className="dropdown-item" href="#">Unpublish modules only</a></li>
          </ul>
        </div>

        <button className="btn btn-outline-info">+ Module</button>
      </div>

      <hr />

      {/* Module List */}
      <ul id="wd-modules" className="list-unstyled">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => (
            <li key={module._id} className={`wd-module mb-3 ${collapsed ? "collapsed" : ""}`}>
              <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                <div className="wd-title h5 mb-0">
                  <GreenCheckmark /> {module.name} {/* Dynamically render module name */}
                </div>
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group mt-2">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <span className="wd-title font-weight-bold">{lesson.name}</span> {/* Dynamically render lesson name */}
                        <ul className="wd-content list-unstyled ms-3">
                          <li className="wd-content-item">{lesson.description}</li> {/* Dynamically render lesson description */}
                        </ul>
                      </div>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <p>No modules available for this course.</p> // Fallback if no modules exist
        )}
      </ul>
    </div>
  );
}
