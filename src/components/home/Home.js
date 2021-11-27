import React from 'react';
import "./Home.css";
import data from '../data/HomeData.json'
const Home = () => {
  return (
    <div className="home" >
      <h1 className="tracking-in-contract-bck-bottom" >Welcome to</h1>
      <h1 className="tracking-in-contract-bck-bottom" >Mavericks bytes</h1>
      {data.map((content) => {
          return(
            <div className="home_Content" key={content.id}>
                <p>{content.text}</p>
            </div>
          )
      })}
    </div>
  );
}

export default Home;
