import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/react-logo.png" alt="React JS Course Thumbnail" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
            <img src="/images/node-logo.png" alt="Node.js Course Thumbnail" />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="/images/python-logo.png" alt="Python AI Course Thumbnail" />
            <div>
              <h5>CS3456 Python for AI</h5>
              <p className="wd-dashboard-course-title">AI and Machine Learning with Python</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
            <img src="/images/data-structures-logo.png" alt="Data Structures Course Thumbnail" />
            <div>
              <h5>CS4567 Data Structures</h5>
              <p className="wd-dashboard-course-title">Learn Efficient Data Management</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/database-logo.png" alt="Database Systems Course Thumbnail" />
            <div>
              <h5>CS5678 Database Systems</h5>
              <p className="wd-dashboard-course-title">Master SQL and NoSQL Databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
            <img src="/images/cloud-computing-logo.png" alt="Cloud Computing Course Thumbnail" />
            <div>
              <h5>CS6789 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">Scalable Applications in the Cloud</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
            <img src="/images/mobile-app-logo.png" alt="Mobile App Development Course Thumbnail" />
            <div>
              <h5>CS7890 Mobile App Development</h5>
              <p className="wd-dashboard-course-title">Build iOS and Android Apps</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
