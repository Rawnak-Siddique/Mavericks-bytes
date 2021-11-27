import React from 'react';
import "./About.css"
import data from '../data/AboutData.json'
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className="about" >
      <h1>Meet the Mavericks</h1>
      <div className="about_Team">
        {data.map((about) => {
            return(
                <div className="" key={about.id}>
                    <AboutCard id={about.id} src={about.imgURL} position={about.position} name={about.name} aboutMe={about.aboutMe} gitURL={about.gitHub} liInURL={about.linkedIn} gMail={about.gMail} fb={about.fb} />
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default About;
