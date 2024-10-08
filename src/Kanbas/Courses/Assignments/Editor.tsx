import React from 'react';

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
  
        {/* Assignment Description */}
        <label htmlFor="wd-description">Description</label><br />
        <textarea id="wd-description" rows={4} cols={50}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name, section links to each lab, links to all relevant source code repositories.
        </textarea>
        <br /><br />
  
        {/* Table for Points and Other Form Elements */}
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
  
            {/* Assignment Group */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="Assignments">Assignments</option>
                  <option value="Quizzes">Quizzes</option>
                </select>
              </td>
            </tr>
  
            {/* Display Grade As */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                </select>
              </td>
            </tr>
  
            {/* Submission Type */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="Online">Online</option>
                  <option value="On Paper">On Paper</option>
                </select>
              </td>
            </tr>
  
            {/* Online Entry Options (Checkboxes) */}
            <tr>
              <td align="right" valign="top">Online Entry Options</td>
              <td>
                <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label>
              </td>
            </tr>
  
            {/* Assign To */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
  
            {/* Due Date */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              </td>
            </tr>
  
            {/* Available From and Until */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" /> Until
                <input type="date" id="wd-available-until" defaultValue="2024-05-28" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
  
        {/* Save and Cancel Buttons */}
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
  