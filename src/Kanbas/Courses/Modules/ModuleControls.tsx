import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import React from 'react';

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {/* Add Module Button */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* Publish All Dropdown Button */}
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only-btn" className="dropdown-item" href="#">
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      {/* Other Buttons */}
      <button id="wd-view-progress" className="btn btn-lg btn-outline-secondary me-1">View Progress</button>
      <button id="wd-collapse-all" className="btn btn-lg btn-outline-secondary me-1">Collapse All</button>
    </div>
  );
}
