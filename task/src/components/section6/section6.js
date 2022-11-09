import React from 'react'
import './section6.css'

function Section6() {
  return (
    <>
      <div id="s6box">
          <span id="s6content1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</span>
          <div id="s6dot"></div>
          <span id="s6content2">Maria Lopez, VP of Design at Meshery</span>
      </div>

      <div id="s6box1">
        <span id="s6box1content1">Ready to get started?</span>
        <span id="s6box1content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <button type="button" id="s6start" href="/" className="btn btn-dark btn-lg"><span style={{"font-size":"1vw"}}>Start free trial</span></button>
      </div>

    </>
  );

};

export default Section6;