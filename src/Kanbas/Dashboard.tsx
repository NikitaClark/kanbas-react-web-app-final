import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { enrollInCourse, unenrollFromCourse } from "./enrollmentsSlice";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollInCourse);
  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";
  const navigate = useNavigate();
  const goToCourse = (courseId: string) => {
    if (currentUser?.role === "STUDENT" && !isEnrolled(courseId)) {
      alert("You must enroll in this course to view it.");
    } else {
      navigate(`/Kanbas/Courses/${courseId}`);
    }
  };
  // State to manage courses, editing mode, and new course form visibility
  const [courses, setCourses] = useState(db.courses);
  const [publishedCoursesCount, setPublishedCoursesCount] = useState(courses.length);
  const [isEditing, setIsEditing] = useState(false);
  const [editCourseId, setEditCourseId] = useState<string | null>(null);
  const [editCourseData, setEditCourseData] = useState({
    name: "",
    description: ""
  });
  const handleEnroll = (courseId: string) => {
    const newEnrollment = { user: currentUser._id, course: courseId };
    dispatch(enrollInCourse(newEnrollment)); 
  };


  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollFromCourse({ user: currentUser._id, course: courseId })); 
  };


  const isEnrolled = (courseId: string) => {
    return enrollments.enrollments.some((e: any) => e.user === currentUser._id && e.course === courseId);
  };
  const [isStudentView, setIsStudentView] = useState(false); 

  const [isAdding, setIsAdding] = useState(false); 
  const [newCourseData, setNewCourseData] = useState({
    name: "",
    description: ""
  });

  // Handler for Delete Course
  const handleDeleteCourse = (courseId: string) => {
    const updatedCourses = courses.filter(course => course._id !== courseId);
    setCourses(updatedCourses);
    setPublishedCoursesCount(prevCount => prevCount - 1);
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
    setPublishedCoursesCount(prevCount => prevCount + 1); 
  };
  const toggleStudentView = () => {
    setIsStudentView(prevState => !prevState);
  };
  return (
    <div id="wd-dashboard" className="container mt-4 "style={{marginLeft:"150px"}}>
      <h1 className="text-center">Dashboard</h1>
      <hr />
      <h3>Published Courses: {publishedCoursesCount}</h3>
      {currentUser?.role === "STUDENT" && (
  <div className="position-absolute top-0 end-0 p-3">
    <button className="btn btn-info" onClick={toggleStudentView}>
      {isStudentView ? "View All Courses" : "View My Enrollments"}
    </button>
  </div>
)}

      <div className="row">
      {courses
          .filter(course => (isStudentView ? isEnrolled(course._id) : true)) // Filter based on student view
          .map((course) => (
          <div key={course._id} className="col-md-4 mb-4">
            <div className="card">
            <img
          src={`/images/react.png`}  
          className="card-img-top"
          alt="Course Image"
        />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                {isFaculty ? (
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary"  onClick={() => goToCourse(course._id)}>Go</button>
                    <div>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => handleEditCourse(course)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteCourse(course._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ):(
                  <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary"  onClick={() => goToCourse(course._id)}>Go</button>
                    {isEnrolled(course._id) ? (
                      <button className="btn btn-danger" onClick={() => handleUnenroll(course._id)}>
                        Unenroll
                      </button>
                    ) : (
                      <button className="btn btn-success" onClick={() => handleEnroll(course._id)}>
                        Enroll
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isFaculty && (
        <div>
      <div className="mt-4 d-flex justify-content-between align-items-center">
  <h3>New Course</h3>  
  <button
    className={`btn ${isEditing ? "btn-warning" : "btn-primary"}`} 
    onClick={isEditing ? handleSaveEditCourse : handleSaveNewCourse}
  >
    {isEditing ? "Update" : "Add"}
  </button>
</div>

<input
  type="text"
  name="name"
  value={isEditing ? editCourseData.name : newCourseData.name}
  onChange={isEditing ? (e) => setEditCourseData({ ...editCourseData, name: e.target.value }) : handleNewCourseInputChange}
  className="form-control mb-3"
  placeholder="Course Name"
/>

<input
  type="text"
  name="description"
  value={isEditing ? editCourseData.description : newCourseData.description}
  onChange={isEditing ? (e) => setEditCourseData({ ...editCourseData, description: e.target.value }) : handleNewCourseInputChange}
  className="form-control mb-3"
  placeholder="Course Description"
/>
</div>  )}
    </div>
  );
}