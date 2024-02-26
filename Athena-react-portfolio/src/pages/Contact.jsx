import { Link } from "react-router-dom";
import LinkedinImg from "../images/linkedin.png"; 
import GithubImg from "../images/github.png"; 
import EmailImg from "../images/email.png"; 
import Navbar from "../components/Navbar";
import "../styles/Contact.css";



function Contact() {
    return (
      <>
        <Navbar />

        <div className="contact">
        <h1>Let's Connect!</h1> 
  
        <a href="https://www.linkedin.com/in/athena-l-6b0212182/">
          <img src={LinkedinImg} alt="LinkedIn icon" /> 
        </a>
  
        <a href="https://github.com/leeathena">
          <img src={GithubImg} alt="GitHub icon" /> 
        </a>
  
        <a href="mailto:2405leehy@gmail.com">
          <img src={EmailImg} alt="Email icon" /> 
        </a>
      </div>
      </>
    );
  }


  
  export default Contact;


  
