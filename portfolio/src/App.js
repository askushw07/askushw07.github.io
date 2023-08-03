import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home';
import About from './Components/about';
import Project from './Components/project';
import Contact from './Components/contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Resume' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
