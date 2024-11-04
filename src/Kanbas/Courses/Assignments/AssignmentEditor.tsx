import React from "react";

export default function AssignmentEditor({ assignment }: { assignment: any }) {
  return (
    <div>
      <label htmlFor="wd-name" className="col-sm-3 col-form-label">Assignment Name</label>
      <div className="col-sm-9">
        <input
          id="wd-name"
          className="form-control"
          defaultValue={assignment.name} // Changed from `title` to `name`
        />
      </div>
    </div>
  );
}
