import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import "./ProjectListing.css";

const PROJECT_DATA = [
  { project_name: "project-1", project_description: "project description." },
  { project_name: "project-2", project_description: "project description." },
  { project_name: "project-3", project_description: "project description." },
  { project_name: "project-4", project_description: "project description." },
  { project_name: "project-5", project_description: "project description." },
];

function ProjectHeader(props) {
  return (
    <header className="col-12">
      <h1 className="text-info">Projects-List</h1>
      <p>Project stats here/summary?</p>
    </header>
  );
}
function ProjectListing(props) {
  let [selectedProject, setSelectedProject] = useState(null);
  let [selectedProjectData, setSelectedData] = useState(null);

  return (
    <div class="row bg-white mx-2">
      <ProjectHeader />
      {PROJECT_DATA.map((projectData) => (
        <ProjectCard
          projectName={projectData.project_name}
          projectDescription={projectData.project_description}
        />
      ))}
    </div>
  );
}

export { ProjectListing };
