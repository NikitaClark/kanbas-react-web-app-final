import { Link } from "react-router-dom";
import React from 'react';
import courses from "./Database/courses.json"; // Import courses directly

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh', paddingTop: '50px' }}>
      <div className="container bg-light p-4 rounded shadow-lg" style={{ width: '80%', maxWidth: '1000px' }}>
        <h1 id="wd-dashboard-title" className="text-center">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published" className="text-center">Published Courses ({courses.length})</h2>
        <hr />

        <div id="wd-dashboard-courses" className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-12 col-md-6 col-lg-4 mb-4">
              <Link className="wd-dashboard-course-link text-decoration-none" to={`/Kanbas/Courses/${course._id}/Home`}>
                <div className="card">
                  <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{course.name}</h5> {/* Use course.name to display the course name */}
                    <p className="card-text">
                      {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
                    </p> {/* Truncate the course description if it's too long */}
                    <button className="btn btn-primary">Go</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
