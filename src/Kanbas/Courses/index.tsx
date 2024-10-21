import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";
import { courses } from "../Database"; // Import courses from the database
import React from "react";
import { FaAlignJustify } from "react-icons/fa"; // Icon for breadcrumbs

export default function Courses() {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = courses.find((course) => course._id === cid); // Find the course by ID
  const { pathname } = useLocation(); // Get the current path

  // Extract the current section from the pathname
  const currentSection = pathname.split("/")[4] || "Home"; // If no section, default to "Home"

  return (
    <div id="wd-courses" className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '2rem' }}> {/* Added padding-top */}
      <div className="container bg-light p-4 rounded shadow-lg" style={{ width: '80%', maxWidth: '1000px' }}>
        {/* Breadcrumb */}
        <h2 className="text-danger">
          <FaAlignJustify className="me-3 fs-4 mb-1" /> {/* Breadcrumb icon */}
          {course ? `${course.name} > ${currentSection}` : "Course not found"}
        </h2>
        <hr />

        <div className="d-flex flex-column flex-md-row">
          {/* Sidebar Navigation */}
          <div className="d-none d-md-block col-md-3 col-lg-2 pe-3">
            <CoursesNavigation />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<h3>People</h3>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
