import React from 'react'
import "./nav.css";
import "./geometry.css";
import "./home.css";
import Section2, { ref } from '../section2/section2';
import Section3 from '../section3/section3';
import Section4 from '../section4/section4';
import Section5 from '../section5/section5';
import Section6 from '../section6/section6';
import Footer from '../footer/footer';

function Home() {

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        
        <div className="navbar">
          <span id="head">CN RECRUITMENT</span>
          <a href="/" id="link" style={{ "left": "64.72%", "right": "31.94%" }}>Link 1</a>
          <a href="/" id="link" style={{ "left": "70.28%", "right": "26.39%" }}>Link 2</a>
          <a href="/" id="link" style={{ "left": "75.83%", "right": "20.83%" }}>Link 3</a>
          <a href="/" id="link" style={{ "left": "81.39%", "right": "15.28%" }}>Link 4</a>
          <button id="signup"> <p style={{ "fontSize": "1.25vw", "textAlign": "center" }}>Sign Up </p></button>
        </div>

        <div id="box1">
          <div id="box1dot1" style={{ "left": "3%", "top": "2.5%" }}></div>
          <div id="box1dot1" style={{ "left": "6%", "top": "2.5%" }}></div>
          <div id="box1dot1" style={{ "left": "9%", "top": "2.5%" }}></div>
          <div id="box1squ"></div>
          <div id="box1tri1"></div>
          <div id="box1tri2"></div>
          <div id="box1tri3"></div>
          <div id="box1circle1"></div>
          <div id="box1circle2"></div>
          <div id="box1dot2" style={{ "left": "74%", "top": "7vw" }}></div>
          <div id="box1dot2" style={{ "left": "21%", "top": "13.5vw" }}></div>
          <div id="box1line1"></div>
          <div id="box1line2"></div>
        </div>


        <div id="box2">
          <p id="head_content">CN RECRUITMENT</p>
          <span id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <button type="button" id="start" href="/" className="btn btn-dark"><span style={{ "fontSize": "1vw" }}>Start free trial</span></button>
        </div>


        <div id="box3">
          <p id="foot_content">Trusted by the World’s Best Companies</p>
          <div id="circle" style={{ "left": "68.06%", "right": "26.39%" }}></div>
          <div id="circle" style={{ "left": "59.72%", "right": "34.72%" }}></div>
          <div id="circle" style={{ "left": "51.39%", "right": "43.06%" }}></div>
          <div id="circle" style={{ "left": "43.06%", "right": "51.39%" }}></div>
          <div id="circle" style={{ "left": "34.72%", "right": "59.72%" }}></div>
          <div id="circle" style={{ "left": "26.39%", "right": "68.06%" }}></div>
        </div>

        <svg className="arrows" onClick={handleClick} >
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>

        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
