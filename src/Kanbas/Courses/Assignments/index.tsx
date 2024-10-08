import React from 'react';
import { FaSearch, FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import './styles.css'; // Ensure you have appropriate styles in your CSS file

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container-fluid p-4">
      {/* Search bar and buttons */}
      <div className="d-flex align-items-center mb-3">
        <div className="input-group me-auto" style={{ maxWidth: '300px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input
            type="text"
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <button className="btn btn-outline-secondary me-2">+ Group</button>
        <button className="btn btn-danger">+ Assignment</button>
      </div>

      {/* Assignments header */}
      <h3 id="wd-assignments-title" className="mb-3 d-flex align-items-center">
        <span>ASSIGNMENTS</span>
        <span className="badge bg-light text-dark ms-2">40% of Total</span>
        <FaPlus className="ms-auto" />
      </h3>


      {/* Assignment list */}
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start justify-content-between">
          <div>
            <a
              className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
            <div className="text-muted small">
              Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start justify-content-between">
          <div>
            <a
              className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <div className="text-muted small">
              Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start justify-content-between">
          <div>
            <a
              className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <div className="text-muted small">
              Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-2" />
            <FaEllipsisV />
          </div>
        </li>
      </ul>
    </div>
  );
}
