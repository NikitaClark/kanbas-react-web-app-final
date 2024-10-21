import { Link, useParams, useLocation } from "react-router-dom";
import React from 'react';

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID from the URL
  const { pathname } = useLocation(); // Get the current path

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="w-100 list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`} // Dynamically use the course ID in the URL
          className={`list-group-item ${pathname.endsWith(link) ? "active" : ""} border-0`} // Improved matching
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
