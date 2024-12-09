import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import ProtectedRoute from "./Account/ProtectedRoute";
import React, { useState } from "react";
import * as db from "./Database";

import './styles.css'
import KanbasNavigation from "./Navigation";
import { useSelector } from "react-redux";
import Modules from "./Courses/Modules";
import People from "./Courses/People/index";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  return (
    <div id="wd-kanbas">
      {currentUser && <KanbasNavigation />}
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account/*" element={<Account />} />
        <Route
          path="Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="Courses/:cid/*"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="Courses/:cid/Assignments/*"
          element={
            <ProtectedRoute>
              <Assignments />
            </ProtectedRoute>
          }
        />
        <Route
          path="Courses/:cid/Modules/*"
          element={
            <ProtectedRoute>
              <Modules />
            </ProtectedRoute>
          }
        />
        <Route
          path="Courses/:cid/People/*"
          element={
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
