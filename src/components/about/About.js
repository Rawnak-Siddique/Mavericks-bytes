import React from 'react';
import "./About.css"
import data from '../data/AboutData.json'
import AboutCard from './AboutCard';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div className="about" >
      <h1>Meet the Mavericks</h1>
      <div className="about_Team">
        {data.map((me) => {
          return(
            <div key={me.id}>
              <AboutCard id={me.id} name={me.name} Img={me.Img} position={me.position} initial={me.initial} about={me.aboutMe} gmail={me.gMail} linkedin={me.linkedIn} github={me.gitHub} />
            </div>
          )
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default About;
