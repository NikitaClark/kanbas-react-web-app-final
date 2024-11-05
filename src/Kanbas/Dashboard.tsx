import { useSelector } from "react-redux";
import * as db from "./Database";
import React, { useState } from "react";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  // State to manage courses, editing mode, and new course form visibility
  const [courses, setCourses] = useState(db.courses);
  const [isEditing, setIsEditing] = useState(false);
  const [editCourseId, setEditCourseId] = useState<string | null>(null);
  const [editCourseData, setEditCourseData] = useState({
    name: "",
    description: ""
  });
  const [isAdding, setIsAdding] = useState(false); // State to show/hide the "Add New Course" form
  const [newCourseData, setNewCourseData] = useState({
    name: "",
    description: ""
  });

  // Handler for Delete Course
  const handleDeleteCourse = (courseId: string) => {
    const updatedCourses = courses.filter(course => course._id !== courseId);
    setCourses(updatedCourses);
  };

  // Handler to open the edit form
  const handleEditCourse = (course: typeof db.courses[0]) => {
    setIsEditing(true);
    setEditCourseId(course._id);
    setEditCourseData({ name: course.name, description: course.description });
  };

  // Handler to save edited course
  const handleSaveEditCourse = () => {
    const updatedCourses = courses.map(course =>
      course._id === editCourseId
        ? { ...course, name: editCourseData.name, description: editCourseData.description }
        : course
    );
    setCourses(updatedCourses);
    setIsEditing(false);
    setEditCourseId(null);
  };

  // Handler for form input change for editing
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditCourseData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handler for form input change for adding new course
  const handleNewCourseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCourseData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handler to save new course
  const handleSaveNewCourse = () => {
    const newCourse = {
      _id: `course${courses.length + 1}`, // Generate a unique ID for the course
      name: newCourseData.name,
      description: newCourseData.description,
      startDate: new Date().toISOString().split("T")[0], // Set current date as start date
      endDate: "" // Empty end date initially
    };
    setCourses([...courses, newCourse]);
    setIsAdding(false); // Close the form
    setNewCourseData({ name: "", description: "" }); // Reset form data
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {courses.map((course) => (
        <div key={course._id} className="course-card">
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          {isFaculty && (
            <div className="course-controls">
              <button onClick={() => handleEditCourse(course)}>Edit Course</button>
              <button onClick={() => handleDeleteCourse(course._id)}>Delete Course</button>
            </div>
          )}
        </div>
      ))}

      {isEditing && (
        <div className="popup-form">
        <div className="popup-content">
          <h3>Edit Course</h3>
          <input
            type="text"
            name="name"
            value={editCourseData.name}
            onChange={handleEditInputChange}
            placeholder="Course Name"
          />
          <input
            type="text"
            name="description"
            value={editCourseData.description}
            onChange={handleEditInputChange}
            placeholder="Course Description"
          />
          <button onClick={handleSaveEditCourse}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
        </div>
      )}

      {isFaculty && <button onClick={() => setIsAdding(true)}>Add New Course</button>}

      {isAdding && (
        <div className="popup-form">
          <div className="popup-content">
            <h3>Add New Course</h3>
            <input
              type="text"
              name="name"
              value={newCourseData.name}
              onChange={handleNewCourseInputChange}
              placeholder="Course Name"
            />
            <input
              type="text"
              name="description"
              value={newCourseData.description}
              onChange={handleNewCourseInputChange}
              placeholder="Course Description"
            />
            <button onClick={handleSaveNewCourse}>Save Course</button>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
