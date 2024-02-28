import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/CV.css";


function Cv() {
  return (
    <>
    <h1> My CV</h1>
    <div className="Cv">
    <a href="https://docs.google.com/document/d/1PBtnyAHaeC24ho_jusWUIJxUrD3Svmsk/edit?usp=sharing&ouid=113663373679697744067&rtpof=true&sd=true" 
           className="button-container" 
           target="_blank" 
           rel="noopener noreferrer">
          <button>View here</button>
        </a>
    </div>
    </>
  );
}

export default Cv;