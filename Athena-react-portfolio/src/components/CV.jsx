import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/CV.css";


function Cv() {
  return (
    <>
    <h1> My CV</h1>
    <div className="Cv">
    <a href="https://drive.google.com/file/d/1-R1ec-Z6ll37n_f3yHly7JCLjtpq0BmO/view?usp=sharing" 
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