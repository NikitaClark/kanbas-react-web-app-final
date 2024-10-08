import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import React from 'react';

export default function KanbasNavigation() {
  return (
    <div 
      id="wd-kanbas-navigation" 
      className="list-group rounded-0 position-fixed top-0 d-none d-md-block bg-black z-2 vh-100" 
      style={{ width: 120 }}
    >
      {/* Northeastern Logo Link */}
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" className="list-group-item bg-black border-0 text-center">
        <img src="/images/NU.png" width="75px" alt="Northeastern Logo" />
        
      </a>

      {/* Account Link */}
      <Link to="/Kanbas/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white" />
        <div>Account</div>
      </Link>

      {/* Dashboard Link */}
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0 bg-black text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />
        <div>Dashboard</div>
      </Link>

      {/* Courses Link */}
      <Link to="/Kanbas/Courses" id="wd-course-link" className="list-group-item text-center border-0 bg-black text-white">
        <LiaBookSolid className="fs-1 text-white" />
        <div>Courses</div>
      </Link>

      {/* Calendar Link */}
      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className="list-group-item text-center border-0 bg-black text-white">
        <IoCalendarOutline className="fs-1 text-white" />
        <div>Calendar</div>
      </Link>

      {/* Inbox Link */}
      <Link to="/Kanbas/Inbox" id="wd-inbox-link" className="list-group-item text-center border-0 bg-black text-white">
        <FaInbox className="fs-1 text-white" />
        <div>Inbox</div>
      </Link>

      {/* Labs Link */}
      <Link to="/Labs" id="wd-labs-link" className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white" />
        <div>Labs</div>
      </Link>
    </div>
  );
}
