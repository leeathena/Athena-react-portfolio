import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import PasswordGeneratorImg from "../images/Passwordgenerator.png";
import CocktailLibraryImg from "../images/Cocktaillibrary.png";
import CodeQuizImg from "../images/Codequiz.png";
import WeatherDashboardImg from "../images/Weatherdashboard.png";
import Navbar from "../components/Navbar";
import Cv from "../components/CV";
import "../styles/Resume.css";


function Resume() {
  return (
    <>
      <Navbar />
      <h1>About me</h1> 
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel className="Carousel-container" >
          <Carousel.Item interval={1000}>
            <img src={PasswordGeneratorImg} alt="Password Generator" />
            <Carousel.Caption>
              <h3>Password Generator</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={CocktailLibraryImg} alt="Cocktail Library" />
            <Carousel.Caption>
              <h3>Cocktail Library</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={CodeQuizImg} alt="Code Quiz" />
            <Carousel.Caption>
              <h3>Code Quiz</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={WeatherDashboardImg} alt="Weather Dashboard" />
            <Carousel.Caption>
              <h3>Weather Dashboard</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Cv />
    </>
  );
}


export default Resume;
