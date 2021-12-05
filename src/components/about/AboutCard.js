import React from 'react';
import './AboutCard.css'


const AboutCard = ({ id, name, Img, position, initial, about, gmail, linkedin, github }) => {
  const openLinkedIn = () => {
    window.open(linkedin,'_blank');
  }
  const openGithub = () => {
    window.open(github,'_blank');
  }
  return (
    <div className="aboutCard">
      <div className="aboutCard_Img">
        <img src={Img} alt="" />
      </div>
      <div className="aboutCard_Info">
        <h3>.{name}, ({initial})</h3>
        <h5>[</h5>
        <p>"position" : "{position}",</p>
        <p>"aboutMe" : "{about}",</p>
        <p>"gmail" : "{gmail}",</p>
        <p className="aboutCard_InfoLink" onClick={openLinkedIn} >"linkedIn": "{linkedin}",</p>
        <p className="aboutCard_InfoLink" onClick={openGithub} >"gitHub": "{github}",</p>
        <h5>],</h5>
      </div>
    </div>
  );
}

export default AboutCard;

