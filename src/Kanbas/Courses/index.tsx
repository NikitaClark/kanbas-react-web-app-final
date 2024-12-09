import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React from "react"; // Import CoursesNavigation
import CoursesNavigation from "./Navigation";
import * as courseClient from "./client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    // const newCourse = await courseClient.createCourse(course);
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  return (
    <div style={{ marginLeft: "150px" }}>
      <CoursesNavigation />

      {/* <h1>{course.name}</h1>
      <p>{course.description}</p> */}

    </div>
  );
}
