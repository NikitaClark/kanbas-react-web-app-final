import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import React from 'react';

export default function Account() {
  return (
    <div id="wd-account-screen" className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column flex-md-row bg-light p-4 rounded shadow-lg" style={{ width: '80%', maxWidth: '800px' }}>
        
        {/* Account Navigation */}
        <div className="me-md-3 mb-3 mb-md-0">
          <AccountNavigation />
        </div>

        {/* Main Content */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
        
      </div>
    </div>
  );
}
