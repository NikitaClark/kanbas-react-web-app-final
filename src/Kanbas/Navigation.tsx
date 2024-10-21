import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import React from "react";

export default function KanbasNavigation() {
  const { pathname } = useLocation(); // Get current path

  // Navigation links data structure
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard, id: "wd-dashboard-link" },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid, id: "wd-course-link" },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline, id: "wd-calendar-link" },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox, id: "wd-inbox-link" },
    { label: "Labs", path: "/Labs", icon: FaRegCircleUser, id: "wd-labs-link" }, // Placeholder icon for Labs
  ];

  return (
    <div 
      id="wd-kanbas-navigation" 
      className="list-group rounded-0 position-fixed top-0 d-none d-md-block bg-black z-2 vh-100" 
      style={{ width: 120 }}
    >
      {/* Northeastern Logo Link */}
      <a 
        href="https://www.northeastern.edu/" 
        id="wd-neu-link" 
        target="_blank" 
        rel="noreferrer" 
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NU.png" width="75px" alt="Northeastern Logo" />
      </a>

      {/* Account Link (hardcoded as it’s separate from dynamic links) */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Account") ? "text-danger" : "text-white"
        }`}
      >
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <div>Account</div>
      </Link>

      {/* Dynamically Render Navigation Links */}
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.path}
          id={link.id}
          className={`list-group-item text-center border-0 bg-black ${
            pathname.includes(link.path) ? "text-danger" : "text-white"
          }`}
        >
          <link.icon className={`fs-1 ${pathname.includes(link.path) ? "text-danger" : "text-white"}`} />
          <div>{link.label}</div>
        </Link>
      ))}
    </div>
  );
}
