import React from 'react';
import './ProjectCard.css';
import Img from '../image/computer-chip.png';

const ProjectCard = ({ id, url, Name, projects }) => {
  const openProject = () => {
    window.open(url,'_blank');
  };
  return (
    <div className="projectCard" onClick={openProject}>
      <div className="projectCard_Icon">
        <img src={Img} alt="" />
      </div>
      <div className="projectCard_Info">
        <h2>.PROJECT {id}. ( {Name} )</h2>
        <h2>DETAILS: <span className="projectCard_InfoSpan">. . . ............ . . .</span></h2>
        <h3>[</h3>
        <h6>"name": "{Name}"</h6>
        <h6>"activeURL": "{url}"</h6>
        <h6>"aboutProject": "{projects}"</h6>
        <h3>],</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
