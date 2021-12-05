import React from 'react';
import './Projects.css'
import data from '../data/projectData.json'
import ProjectCard from './ProjectCard';
import Footer from '../footer/Footer';

const Projects = () => {
  return (
    <div className="projects">
      {data.map((project) => {
        return(
          <div key={project.id} >
            <ProjectCard id={project.id} url={project.url} Name={project.Name} projects={project.projects}/>
          </div>
        )
      })}
      <Footer/>
    </div>
  );
}

export default Projects;
