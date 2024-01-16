import React, { useState } from 'react';
import './Navbar.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WriteForUsPage from './WriteForUsPage';

function Navbar(props) {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => (
    currentPage === 'about' ? <AboutPage /> :
    currentPage === 'contact' ? <ContactPage /> :
    currentPage === 'writeForUs' ? <WriteForUsPage /> :
    null
  );

  return (
    <div className="main-1">
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange('about')}>
              {props.name}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('contact')}>
              {props.name1}
            </a>
          </li>
          <li>
            <a href="#writeForUs" onClick={() => handlePageChange('writeForUs')}>
              {props.name2}
            </a>
          </li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default Navbar;
