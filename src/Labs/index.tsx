import { Routes, Route } from "react-router-dom";
import TOC from "./TOC"; // Import your Table of Contents
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3"; // Import Lab3

export default function Labs() {
  return (
    <div className="p-3">
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} /> {/* Add wildcard here */}
      </Routes>
    </div>
  );
}
