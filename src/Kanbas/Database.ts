// src/Kanbas/Database.ts

export const assignments = [
    {
      _id: "1",
      name: "Assignment 1", // previously referenced as `title`
      description: "Description of assignment 1",
      dueDate: "2023-12-10",
      moduleId: "module1",
      course: "course1",
    },
    {
      _id: "2",
      name: "Assignment 2",
      description: "Description of assignment 2",
      dueDate: "2023-12-12",
      moduleId: "module2",
      course: "course2",
    },
    // Add more assignments as needed
  ];
  
  export const courses = [
    {
      _id: "course1",
      name: "Course 1",
      description: "Description of course 1",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    },
    {
      _id: "course2",
      name: "Course 2",
      description: "Description of course 2",
      startDate: "2023-09-15",
      endDate: "2023-12-20",
    },
    // Add more courses as needed
  ];
  
  export const users = [
    {
      _id: "user1",
      username: "johndoe",
      password: "password123",
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01",
      email: "johndoe@example.com",
      role: "STUDENT",
      loginId: "JD123", // Added loginId
      section: "A1", // Added section
      lastActivity: "2023-11-01", // Added lastActivity
      totalActivity: 5, // Added totalActivity
    },
    {
      _id: "user2",
      username: "janedoe",
      password: "password456",
      firstName: "Jane",
      lastName: "Doe",
      dob: "1992-02-02",
      email: "janedoe@example.com",
      role: "FACULTY",
      loginId: "JD456",
      section: "B1",
      lastActivity: "2023-11-02",
      totalActivity: 10,
    },
    // Add more users as needed
  ];
  
  export const modules = [
    {
      _id: "module1",
      name: "Module 1",
      course: "course1",
      lessons: [],
    },
    {
      _id: "module2",
      name: "Module 2",
      course: "course2",
      lessons: [],
    },
    // Add more modules as needed
  ];
  
  export const enrollments = [
    {
      user: "user1",
      course: "course1",
    },
    {
      user: "user2",
      course: "course2",
    },
    // Add more enrollments as needed
  ];
  