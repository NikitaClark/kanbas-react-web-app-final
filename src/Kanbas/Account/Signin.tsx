import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"; // Adjust the path if necessary

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ maxWidth: "300px", width: "100%" }}>
        <h3>Sign in</h3>
        <input className="form-control mb-3" placeholder="username" type="text" />
        <input className="form-control mb-3" placeholder="password" type="password" />
        <Link id="wd-signin-btn" className="btn btn-primary w-100 mb-3" to="/Kanbas/Dashboard">
          Sign in
        </Link>
        <Link id="wd-signup-link" className="text-decoration-none" to="/Kanbas/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
