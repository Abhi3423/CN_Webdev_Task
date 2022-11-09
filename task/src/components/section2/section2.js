import React from 'react'
import { useRef } from 'react';
import './section2.css'

export var ref;

function Section2() {

  ref = useRef(null);
  return (
    <>
      <div id="box" ref={ref}>
        <div id="s2box1">
          <p id="s2head_content">CN RECRUITMENT</p>
          <span id="s2content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <span id="s2content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <div id="s2dot"></div>
          <span id="s2content3">Dhaka Oke, Product Designer</span>
        </div>

        <div id="s2box3"></div>
        <div id="s2box2">
          <div id="s2squ"></div>
          <div id="s2tri"></div>
          <div id="s2line"></div>
          <div id="s2dot2"></div>
        </div>
      </div>
    </>
  );

};

export default Section2;