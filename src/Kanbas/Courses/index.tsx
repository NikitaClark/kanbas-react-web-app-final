import { useParams } from "react-router-dom";
import React from "react"; // Import CoursesNavigation
import CoursesNavigation from "./Navigation";

interface CoursesProps {
  courses: any[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  const { cid } = useParams(); 
  const course = courses.find((c) => c._id === cid); 

  if (!course) {
    return <div>Course not found.</div>; 
  }

  return (
    <div style={{marginLeft:"150px"}}>
      <CoursesNavigation /> 
      
      <h1>{course.name}</h1> 
      <p>{course.description}</p> 


    </div>
  );
};

export default Courses;
