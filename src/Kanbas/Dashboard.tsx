import { useSelector } from "react-redux";
import * as db from "./Database";
import React from "react";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div>
      <h1>Dashboard</h1>
      {db.courses.map((course) => (
        <div key={course._id} className="course-card">
          <h2>{course.name}</h2>
          {isFaculty && (
            <div className="course-controls">
              <button>Edit Course</button>
              <button>Delete Course</button>
            </div>
          )}
        </div>
      ))}
      {isFaculty && <button>Add New Course</button>}
    </div>
  );
}
