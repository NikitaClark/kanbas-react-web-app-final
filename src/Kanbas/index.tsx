import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import ProtectedRoute from "./Account/ProtectedRoute";
import React, { useState } from "react";
import * as db from "./Database";

import './styles.css'

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);

  return (
    <div id="wd-kanbas">
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
              <Courses courses={courses} />
            </ProtectedRoute>
          }
        />
        <Route
          path="Assignments/*"
          element={
            <ProtectedRoute>
              <Assignments />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
