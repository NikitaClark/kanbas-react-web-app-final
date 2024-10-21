import React from "react";
import { useParams } from "react-router-dom"; // To get the current course ID
import * as db from "../../Database"; // Import everything from the Database
import { FaUserCircle } from "react-icons/fa"; // For displaying user icons

export default function PeopleTable() {
  const { cid } = useParams(); // Get the current course ID from the URL
  const { users, enrollments } = db; // Destructure users and enrollments from the database

  // Filter users based on their enrollment in the current course
  const enrolledUsers = users.filter(user =>
    enrollments.some(enrollment => enrollment.user === user._id && enrollment.course === cid)
  );

  // Display a message if no users are enrolled
  if (enrolledUsers.length === 0) {
    return <p>No users enrolled in this course.</p>;
  }

  return (
    <div id="wd-people-table" className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map(user => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}
