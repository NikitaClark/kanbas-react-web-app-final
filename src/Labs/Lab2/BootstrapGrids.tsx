// src/Labs/Lab2/BootstrapGrids.tsx
import React from 'react';

const BootstrapGrids = () => {
  return (
    <div id="wd-bs-grid-system">
      <h2>Grid system</h2>

      <div className="row">
        <div className="col bg-danger text-white">
          <h3>Left half</h3>
        </div>
        <div className="col bg-primary text-white">
          <h3>Right half</h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4 bg-warning">
          <h3>One third</h3>
        </div>
        <div className="col-8 bg-success text-white">
          <h3>Two thirds</h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-2 bg-dark text-white">
          <h3>Sidebar</h3>
        </div>
        <div className="col-8 bg-secondary text-white">
          <h3>Main content</h3>
        </div>
        <div className="col-2 bg-info">
          <h3>Sidebar</h3>
        </div>
      </div>

      <div id="wd-bs-responsive-grids" className="mt-3">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 bg-warning">
            <h3>Column A</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-primary text-white">
            <h3>Column B</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-danger text-white">
            <h3>Column C</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-success text-white">
            <h3>Column D</h3>
          </div>
        </div>
      </div>

      {/* Dramatic Responsive Grid System */}
      <div id="wd-bs-responsive-dramatic" className="mt-3">
        <h2>Responsive grid system</h2>
        <div className="row">
          {Array.from({ length: 12 }, (_, i) => {
            const colors = ["bg-warning", "bg-primary text-white", "bg-danger text-white", "bg-success text-white"];
            const colorClass = colors[i % colors.length];
            return (
              <div
                key={i}
                className={`col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 ${colorClass}`}
              >
                <h4>{i + 1}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BootstrapGrids;
