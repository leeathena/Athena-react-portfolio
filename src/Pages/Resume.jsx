import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import PasswordGeneratorImg from "/Passwordgenerator.png";
import CocktailLibraryImg from "/Cocktaillibrary.png";
import CodeQuizImg from "/Codequiz.png";
import WeatherDashboardImg from "/Weatherdashboard.png";
import Navbar from "../components/Navbar";
import Cv from "../components/CV";
import "../styles/Resume.css";
import projectsData from '../../project.json';



function Resume() {
  return (
    <>
    <Navbar />
    <h1>My Projects🚀</h1> 
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel>
          {projectsData.map((project) => (
            <Carousel.Item key={project.id}>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
              <Carousel.Caption>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    <Cv />
  </>
);
}


export default Resume;
