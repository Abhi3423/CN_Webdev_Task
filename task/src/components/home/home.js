import React from 'react'
import "./nav.css";
import "./geometry.css";
import "./home.css";
import Section2 from '../section2/section2';

function home() {
  return (
    <>
    <div className='container'>
      <div className="navbar">
        <p id="head">CN RECRUITMENT</p>
        <a href="/" id="link" style={{"left":"64.72%","right":"31.94%"}}>Link 1</a>
        <a href="/" id="link" style={{"left":"70.28%","right":"26.39%"}}>Link 2</a>
        <a href="/" id="link" style={{"left":"75.83%","right":"20.83%"}}>Link 3</a>
        <a href="/" id="link" style={{"left":"81.39%","right":"15.28%"}}>Link 4</a>
        <button id="signup"> <p style={{"font-size":"1.25vw","textAlign":"center","margin-top":"5.5%"}}>Sign Up </p></button>
      </div>

      <div id="box1"></div>






      <div id="box2">
      <p id="head_content">CN RECRUITMENT</p>
      <span id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      <button type="button" id="start" href="/" className="btn btn-dark"><span style={{"font-size":"1vw"}}>Start free trial</span></button>
      </div>


      <div id="box3">
        <p id="foot_content">Trusted by the World’s Best Companies</p>
        <div id="circle" style={{"left":"68.06%","right":"26.39%"}}></div>
        <div id="circle" style={{"left":"59.72%","right":"34.72%"}}></div>
        <div id="circle" style={{"left":"51.39%","right":"43.06%"}}></div>
        <div id="circle" style={{"left":"43.06%","right":"51.39%"}}></div>
        <div id="circle" style={{"left":"34.72%","right":"59.72%"}}></div>
        <div id="circle" style={{"left":"26.39%","right":"68.06%"}}></div>
      </div>

      <Section2></Section2>
    </div>
    </>
  );
}

export default home;
