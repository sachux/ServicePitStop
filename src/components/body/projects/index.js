import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Customer</label>
      {/* <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div> */}

      <div width="500px">
        <p>
          Do you have any query or issue to be resolved. Create a request now though us and receive the service at your door step.
        </p>
        <ul>
            <li>A broken electronic item</li>
            <li>Installation Request</li>
            <li>Plumbing Work</li>
        </ul>
        <button className="link-button">Create a Request</button>
      </div>
    </div>
  );
}

export default Projects;