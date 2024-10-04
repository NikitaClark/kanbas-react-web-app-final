import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                {/* Default route navigating to Home */}
                <Route path="/" element={<Navigate to="Home" />} />

                {/* Home, Modules, and Assignments routes */}
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} /> {/* Use Assignments component */}

                {/* Assignment Editor */}
                <Route path="Assignments/:aid" element={<AssignmentEditor />} /> {/* Removed duplicate */}

                {/* People route */}
                <Route path="People" element={<h3>People</h3>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
