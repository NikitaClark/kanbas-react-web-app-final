import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

interface Course {
  _id: string;
  name: string;
  number: string;
  credits?: number; // Optional field if not always present
  description: string;
  enrolled?: boolean; // Indicates if the user is enrolled
}

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<Course[]>([]);
  const [publishedCoursesCount, setPublishedCoursesCount] = useState(0);
  const [showMyCourses, setShowMyCourses] = useState(false);
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";

  const goToCourse = (courseId: string) => {
    if (currentUser?.role === "STUDENT" && !isEnrolled(courseId)) {
      alert("You must enroll in this course to view it.");
    } else {
      navigate(`/Kanbas/Courses/${courseId}`);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
      const coursesWithEnrollment = allCourses.map((course: Course) => ({
        ...course,
        enrolled: !!enrolledCourses.find((enroll: any) => enroll.course._id === course._id),
      }));
      setCourses(coursesWithEnrollment);
      setPublishedCoursesCount(coursesWithEnrollment.length);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleEnroll = async (courseId: string) => {
    try {
      const response = await userClient.enrollIntoCourse(currentUser._id, courseId);
      if (response.status === "ENROLLED") {
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course._id === courseId ? { ...course, enrolled: true } : course
          )
        );
      }
    } catch (error) {
      console.error("Failed to enroll in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      const response = await userClient.unenrollFromCourse(currentUser._id, courseId);
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === courseId ? { ...course, enrolled: false } : course
        )
      );
    } catch (error) {
      console.error("Failed to unenroll from course:", error);
    }
  };

  const isEnrolled = (courseId: string) => {
    return courses.some((course) => course._id === courseId && course.enrolled);
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const displayedCourses = showMyCourses
    ? courses.filter((course) => course.enrolled)
    : courses;

  return (
    <div id="wd-dashboard" className="container mt-4" style={{ marginLeft: "150px" }}>
      <h1 className="text-center">Dashboard</h1>
      <button
        onClick={() => setShowMyCourses(!showMyCourses)}
        className="float-end btn btn-primary"
      >
        {showMyCourses ? "All Courses" : "My Courses"}
      </button>

      <hr />
      <h3>Published Courses: {publishedCoursesCount}</h3>

      <div className="row">
        {displayedCourses.map((course) => (
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
                    <button className="btn btn-primary" onClick={() => goToCourse(course._id)}>
                      Go
                    </button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" onClick={() => goToCourse(course._id)}>
                      Go
                    </button>
                    {course.enrolled ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleUnenroll(course._id)}
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleEnroll(course._id)}
                      >
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
    </div>
  );
}
