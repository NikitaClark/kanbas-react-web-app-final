import { Routes, Route } from "react-router-dom";
import TOC from "./TOC"; // Import your Table of Contents
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3"; // Import Lab3
import Lab4 from "./Lab4"; // Import Lab4

export default function Labs() {
  return (
    <div className="p-3">
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} /> {/* Route for Lab1 */}
        <Route path="Lab2" element={<Lab2 />} /> {/* Route for Lab2 */}
        <Route path="Lab3/*" element={<Lab3 />} /> {/* Route for Lab3 with wildcard */}
        <Route path="Lab4" element={<Lab4 />} /> {/* Route for Lab4 */}
      </Routes>
    </div>
  );
}
