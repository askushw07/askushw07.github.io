import './App.css';
import AboutMe from './Components/aboutme/AboutMe';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Projects from './Components/projects/Projects';
import Skills from './Components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home/>
      </main>
      <AboutMe/>
      <Skills />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
