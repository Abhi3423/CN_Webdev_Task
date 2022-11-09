import React from 'react'
import './footer.css'

function footer() {
  return (
    <>
      <div id="fbox">
        <span id="fhead">CN</span>
        <span id="fcontent1">Latest Blog Post</span>
        <span id="fcontent2">Ready to get started?</span>
        <span id="fcontent3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <div id="fline"></div>
        <span id="fproducthead">Product</span>
        <span id="fproduct" style={{"top":"28.95%","bottom":"65.79%"}}>Product</span>
        <span id="fproduct" style={{"top":"36.32%","bottom":"58.42%"}}>Product</span>
        <span id="fproduct" style={{"top":"43.68%","bottom":"51.05%"}}>Product</span>
        <span id="fproduct" style={{"top":"51.05%","bottom":"43.68%"}}>Product</span>
        <span id="fproduct" style={{"top":"58.42%","bottom":"36.32%"}}>Product</span>

        <span id="fcompanyhead">Company</span>
        <span id="fcompany" style={{"top":"28.95%","bottom":"65.79%"}}>Company</span>
        <span id="fcompany" style={{"top":"36.32%","bottom":"58.42%"}}>Company</span>
        <span id="fcompany" style={{"top":"43.68%","bottom":"51.05%"}}>Company</span>
        <span id="fcompany" style={{"top":"51.05%","bottom":"43.68%"}}>Company</span>
        <span id="fcompany" style={{"top":"58.42%","bottom":"36.32%"}}>Company</span>

        <span id="fdate">© 2010 — 2020</span>
        <span id="fprivacy">Privacy — Terms</span>
      </div>

    </>
  );

};

export default footer;