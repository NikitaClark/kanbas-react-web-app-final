import React from 'react';
import { Link } from "react-router-dom";
import './style.css'; // Import your custom styles here

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="d-flex flex-column align-items-start p-3">
      <div className="border-start border-2 ps-2 mb-2">
        <Link to="/Kanbas/Account/Signin" className="text-dark fw-bold d-block mb-2">Signin</Link>
        <Link to="/Kanbas/Account/Signup" className="text-danger d-block mb-2">Signup</Link>
        <Link to="/Kanbas/Account/Profile" className="text-danger d-block">Profile</Link>
      </div>
    </div>
  );
}
