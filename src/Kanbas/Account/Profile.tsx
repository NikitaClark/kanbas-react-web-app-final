import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"; // Make sure to adjust the path if necessary

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ maxWidth: "300px", width: "100%" }}>
        <h3>Profile</h3>
        <input defaultValue="alice" placeholder="username" className="form-control mb-3 wd-username" />
        <input defaultValue="123" placeholder="password" type="password" className="form-control mb-3 wd-password" />
        <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="form-control mb-3" />
        <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="form-control mb-3" />
        <input defaultValue="2000-01-01" type="date" id="wd-dob" className="form-control mb-3" />
        <input defaultValue="alice@wonderland.com" type="email" id="wd-email" className="form-control mb-3" />
        <select defaultValue="USER" id="wd-role" className="form-control mb-3">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
          Signout
        </Link>
      </div>
    </div>
  );
}
