import React from 'react';
import './AboutCard.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';


const AboutCard = ({ id, src, name, position, aboutMe, gitURL, liInURL, gMail, fb }) => {
    console.log(id);
    const openGit = () => {
        window.open(gitURL,'_blank');
    }
    const openLiIn = () => {
        window.open(liInURL,'_blank');
    }
    const openFB = () => {
        window.open(fb,'_blank');
    }
  return (
    <div className="aboutCard">
      <div className="aboutCard_Left">
        <img src={src} alt="" />
        <div className="aboutCard_LeftConnection">
            <IconButton onClick={openGit}>
                <GitHubIcon />
            </IconButton>
            <IconButton  onClick={openFB}>
                <FacebookIcon />
            </IconButton>
            <IconButton onClick={openLiIn}>
                <LinkedInIcon />
            </IconButton>
        </div>
      </div>
      <div className="aboutCard_Right">
          <h1>{position}</h1>
          <h2>{name}</h2>
          <div className="aboutCard_RightEmail">
            <ContactMailIcon/>
            <p> - {gMail}</p>
        </div>
          <p className="aboutCard_RightP" >{aboutMe}</p>
      </div>
    </div>
  );
}

export default AboutCard;
