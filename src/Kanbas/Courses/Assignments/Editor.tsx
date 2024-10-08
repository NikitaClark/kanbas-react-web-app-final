import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container p-4 bg-light rounded shadow-sm">
        <h2 className="mb-4">Edit Assignment</h2>
        
        {/* Assignment Name */}
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="col-sm-3 col-form-label">Assignment Name</label>
          <div className="col-sm-9">
            <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
          </div>
        </div>

        {/* Assignment Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea id="wd-description" className="form-control" rows={4}>
            The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: Your full name, section links to each lab, links to all relevant source code repositories.
          </textarea>
        </div>

        {/* Table for Points and Other Form Elements */}
        <div className="row">
          <div className="col-md-6">
            {/* Points */}
            <div className="mb-3">
              <label htmlFor="wd-points" className="form-label">Points</label>
              <input id="wd-points" className="form-control" defaultValue={100} />
            </div>

            {/* Assignment Group */}
            <div className="mb-3">
              <label htmlFor="wd-group" className="form-label">Assignment Group</label>
              <select id="wd-group" className="form-control">
                <option value="Assignments">Assignments</option>
                <option value="Quizzes">Quizzes</option>
              </select>
            </div>

            {/* Display Grade As */}
            <div className="mb-3">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
              <select id="wd-display-grade-as" className="form-control">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </div>

            {/* Submission Type */}
            <div className="mb-3">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
              <select id="wd-submission-type" className="form-control">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            {/* Online Entry Options (Checkboxes) */}
            <div className="mb-3">
              <label className="form-label">Online Entry Options</label><br />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>

            {/* Assign To */}
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
              <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
            </div>

            {/* Due Date */}
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
            </div>

            {/* Available From and Until */}
            <div className="mb-3">
              <label className="form-label">Available from</label>
              <div className="d-flex">
                <input type="date" id="wd-available-from" className="form-control me-2" defaultValue="2024-05-06" />
                <span className="align-self-center me-2">Until</span>
                <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-28" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Save and Cancel Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary me-2">Cancel</button>
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    );
}
