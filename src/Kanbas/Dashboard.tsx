import { Link } from "react-router-dom";
import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="d-flex justify-content-center align-items-center flex-column vh-100">
      <div className="container bg-light p-4 rounded shadow-lg" style={{ width: '80%', maxWidth: '1000px' }}>
        <h1 id="wd-dashboard-title" className="text-center">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published" className="text-center">Published Courses (7)</h2>
        <hr />

        <div id="wd-dashboard-courses" className="row">
          {/* Course 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/1234/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS1234 React JS</h5>
                  <p className="card-text">Full Stack Software Developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/2345/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS2345 Node.js</h5>
                  <p className="card-text">Backend Development with Node.js</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/3456/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS3456 Python for AI</h5>
                  <p className="card-text">AI and Machine Learning with Python</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 4 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/4567/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS4567 Data Structures</h5>
                  <p className="card-text">Learn Efficient Data Management</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 5 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/5678/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS5678 Database Systems</h5>
                  <p className="card-text">Master SQL and NoSQL Databases</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 6 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/6789/Home">
              <div className="card">
              <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">CS6789 Cloud Computing</h5>
                  <p className="card-text">Scalable Applications in the Cloud</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>

          {/* Course 7 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Link className="wd-dashboard-course-link text-decoration-none" to="/Kanbas/Courses/7890/Home">
              <div className="card">
                <img src="/images/image1.png" alt="Course Thumbnail" className="card-img-top" />
                
                <div className="card-body text-center">
                  <h5 className="card-title">CS7890 Mobile App Development</h5>
                  <p className="card-text">Build iOS and Android Apps</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
