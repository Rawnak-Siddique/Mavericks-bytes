import React from 'react';
import "./Home.css";
import img1 from '../image/Group 123.png'
import img2 from '../image/Group 120.png'
import img3 from '../image/Group 121.png'
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div className="home" >
      <div className="hone_Info">
        <h2 className="home_First" >Welcome to</h2>
        <h1 className="tracking-in-contract-bck-bottom" ><span className="home_First" >Mavericks</span><span className="home_Second">.Bytes()</span></h1>
        <div className="hone_InfoSmall">
          <h6 className="home_First">Creative Full-stack <span className="home_Second">Developers</span>, React.js <span className="home_Second">Developer</span></h6>
          <h6 className="home_First"> MERN-stack <span className="home_Second">Developer</span>, Interface <span className="home_Second">Designers</span></h6>
          <h6 className="home_First"> Graphics <span className="home_Second">Designers</span>, WordPress <span className="home_Second">Developer, SEO</span></h6>
        </div>
      </div>
      <div className="home_Content">
        <img src={img1} alt="" />
      </div>
      <div className="home_Content">
        <img src={img2} alt="" />
      </div>
      <div className="home_Content">
        <img className="home_ContentHeight" src={img3} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
