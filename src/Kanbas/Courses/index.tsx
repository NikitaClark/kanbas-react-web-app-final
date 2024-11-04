import React from "react";

interface CoursesProps {
  courses: any[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
