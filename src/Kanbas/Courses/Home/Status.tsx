import React from 'react';
import './styles.css'; // Ensure you have appropriate styles in your CSS file

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="card p-3 mb-4 shadow-sm">
      <h2 className="card-title text-center mb-3">Course Status</h2>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-danger w-50 me-2">Unpublish</button>
        <button className="btn btn-outline-success w-50">Publish</button>
      </div>
      <hr />
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-secondary">Import Existing Content</button>
        <button className="btn btn-secondary">Import from Commons</button>
        <button className="btn btn-secondary">Choose Home Page</button>
        <button className="btn btn-secondary">View Course Stream</button>
        <button className="btn btn-secondary">New Announcement</button>
        <button className="btn btn-secondary">New Analytics</button>
        <button className="btn btn-secondary">View Course Notifications</button>
      </div>
    </div>
  );
}
