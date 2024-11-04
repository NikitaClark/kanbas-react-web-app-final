import React, { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState(null); // Initialize event state

  const handleClick = (e: any) => {
    e.target = e.target.outerHTML; // Replace target with outerHTML to avoid circular reference
    delete e.view; // Remove the view property to simplify
    setEvent(e); // Update the event state
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre> {/* Display event as JSON */}
      <hr />
    </div>
  );
}
