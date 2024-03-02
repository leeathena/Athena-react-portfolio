import Home from './Pages/Home'; 
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import { BrowserRouter  } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import "./styles/App.css";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        </Routes>
    </>
  );
}

export default App;
