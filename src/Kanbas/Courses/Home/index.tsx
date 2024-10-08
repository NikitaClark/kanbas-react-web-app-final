import Modules from "../Modules";
import React from 'react';
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="container">
      <div className="row">
        {/* Modules section - Takes up 8 columns on medium and larger screens */}
        <div className="col-12 col-md-8">
          <Modules />
        </div>

        {/* CourseStatus section - Takes up 4 columns on medium and larger screens */}
        <div className="col-12 col-md-4 mt-3 mt-md-0">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
