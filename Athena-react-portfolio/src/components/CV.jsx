import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/CV.css";


function Cv() {
  return (
    <>
    <h1> My CV</h1>
    <div className="Cv">
      <button className="button-container" to="https://docs.google.com/document/d/1PBtnyAHaeC24ho_jusWUIJxUrD3Svmsk/edit?usp=sharing&ouid=113663373679697744067&rtpof=true&sd=true" >View here</button>
     
    </div>
    </>
  );
}

export default Cv;