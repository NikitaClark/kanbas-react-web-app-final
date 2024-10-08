import React, { useState } from "react";
import "./styles.css"; // Assuming you have this CSS file for additional styling

export default function Modules() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

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
        {/* Week 1, Lecture 1 */}
        <li className={`wd-module mb-3 ${collapsed ? "collapsed" : ""}`}>
          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
            <div className="wd-title h5 mb-0">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <button onClick={() => setCollapsed(!collapsed)} className="btn btn-outline-secondary btn-sm">
              {collapsed ? "Expand" : "Collapse"}
            </button>
          </div>
          <ul className="wd-lessons list-group mt-2">
            <li className="wd-lesson list-group-item">
              <span className="wd-title font-weight-bold">LEARNING OBJECTIVES</span>
              <ul className="wd-content list-unstyled ms-3">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item">
              <span className="wd-title font-weight-bold">READING</span>
              <ul className="wd-content list-unstyled ms-3">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item">
              <span className="wd-title font-weight-bold">SLIDES</span>
              <ul className="wd-content list-unstyled ms-3">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 1, Lecture 2 */}
        <li className={`wd-module mb-3 ${collapsed ? "collapsed" : ""}`}>
          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
            <div className="wd-title h5 mb-0">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <button onClick={() => setCollapsed(!collapsed)} className="btn btn-outline-secondary btn-sm">
              {collapsed ? "Expand" : "Collapse"}
            </button>
          </div>
          <ul className="wd-lessons list-group mt-2">
            <li className="wd-lesson list-group-item">
              <span className="wd-title font-weight-bold">LEARNING OBJECTIVES</span>
              <ul className="wd-content list-unstyled ms-3">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item">
              <span className="wd-title font-weight-bold">SLIDES</span>
              <ul className="wd-content list-unstyled ms-3">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
