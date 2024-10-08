import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Adjust the path if necessary

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ maxWidth: "300px", width: "100%" }}>
        <h3>Signup</h3>
        <input
          placeholder="username"
          className="form-control mb-3"
          type="text"
        />
        <input
          placeholder="password"
          type="password"
          className="form-control mb-3"
        />
        <button className="btn btn-primary w-100 mb-3">Signup</button>
        <Link to="/Kanbas/Account/Signin" className="text-decoration-none">Signin</Link>
      </div>
    </div>
  );
}
