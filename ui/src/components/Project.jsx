import React from "react";

const Project = () => {
  return (
    <section id="project">
      <div className="project-div">
        <h2>Projects</h2>
        <div className="display-cards">
          <div className="project-card">
            <div className="project-img" />
            <h4 className="project-title">ToDo List</h4>
            <p className="project-details">
              The ToDo List web application allows users to create tasks, mark
              them as done or delete them.
            </p>
            <div className="btn-div">
              <button type="button" className="btn-demo">
                Demo
              </button>
              <button type="button" className="btn-source">
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
