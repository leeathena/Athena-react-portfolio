import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/athenas-portfolio" className="athenas-portfolio">Athena's React Portfolio</a>
      <ul>
      <li><a href="/resume">Resume</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
