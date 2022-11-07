import React from 'react'
import "./nav.css";
import "./geometry.css";
import "./home.css";

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
        <button id="signup"> <p style={{"font-size":"2.5vh","margin-top":"5.5%"}}>Sign Up </p></button>
      </div>

      <div id="box1"></div>







      <div id="box3">
        <p id="content">Trusted by the World’s Best Companies</p>
        <div id="circle" style={{"left":"68.06%","right":"26.39%"}}></div>
        <div id="circle" style={{"left":"59.72%","right":"34.72%"}}></div>
        <div id="circle" style={{"left":"51.39%","right":"43.06%"}}></div>
        <div id="circle" style={{"left":"43.06%","right":"51.39%"}}></div>
        <div id="circle" style={{"left":"34.72%","right":"59.72%"}}></div>
        <div id="circle" style={{"left":"26.39%","right":"68.06%"}}></div>
      </div>
    </div>
    </>
  );
}

export default home;
