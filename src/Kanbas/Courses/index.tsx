import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import React from 'react';
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses" className="container">
      <h2>Course 1234</h2>
      <hr />

      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar Navigation - will stack on smaller screens */}
        <div className="d-none d-md-block col-md-3 col-lg-2 pe-3">
          <CoursesNavigation />
        </div>
        
        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10">
          <Routes>
            {/* Default route navigating to Home */}
            <Route path="/" element={<Navigate to="Home" />} />

            {/* Home, Modules, and Assignments routes */}
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />

            {/* Assignment Editor */}
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />

            {/* People route */}
            <Route path="People" element={<h3>People</h3>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

