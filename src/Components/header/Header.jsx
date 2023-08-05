import React, { useState } from 'react'
import './header.css';
import resume from '../../Assets/resume.pdf'

const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
      <header className="header">
          <nav className="nav container">
              <a href="index.html" className="nav_logo">Alok Singh Kushwah</a>
              <div className={!toggle?"nav_menu":"show-menu"}>
                  <ul className="nav_list grid">
                      <li className="nav_item">
                          <a href="#home" className="nav_link active-link">
                              <i className="uil uil-estate nav__icon" /> Home
                          </a>
                      </li>

                      <li className="nav_item">
                          <a href="#about" className="nav_link">
                              <i className="uil uil-user nav__icon"> </i>About
                          </a>
                      </li>

                      <li className="nav_item">
                          <a href="#skills" className="nav_link">
                              <i className="uil uil-file-alt nav__icon"> </i>
                              Skills
                          </a>
                      </li>

                      <li className="nav_item">
                          <a href="#projects" className="nav_link">
                              <i className="uil uil-briefcase-alt nav__icon"> </i>
                              Projects
                          </a>
                      </li>
                      <li className="nav_item">
                          <a href="#contact" className="nav_link">
                              <i className="uil uil-message nav__icon"> </i>
                              Contact
                          </a>
                      </li>

                      <li className="nav_item">
                          <a href={resume} className="nav_link" download={'resume'}>
                              <i className="uil uil-file nav__icon"> </i>
                              Resume
                          </a>
                      </li>

                  </ul>
                    
              </div>

              
            <div className="nav_toggle" onClick={()=>setToggle(!toggle)}>
                  {
                      !toggle ? <i class="uil uil-apps " /> :
                          <i className="uil uil-times nav_close" /> 
                      
                }
            </div>
              
                  
          </nav>
    </header>
  )
}

export default Header