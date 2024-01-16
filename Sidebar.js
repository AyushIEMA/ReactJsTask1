import React, { useState } from 'react';
import './Sidebar.css';

import ServicePage from './ServicePage';
import ClientPage from './ClientPage';
import SignOutPage from './SignOutPage';
import DefaultPage from './DefaultPage';

function Sidebar(props) {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => (
    
    currentPage === 'service' ? <ServicePage /> :
    currentPage === 'client' ? <ClientPage /> :
    currentPage === 'signOut' ? <SignOutPage /> :
    <DefaultPage />
  );

  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange('about')}>
              {props.name}
            </a>
          </li>
          <li>
            <a href="#service" onClick={() => handlePageChange('service')}>
              {props.name1}
            </a>
          </li>
          <li>
            <a href="#client" onClick={() => handlePageChange('client')}>
              {props.name2}
            </a>
          </li>
          <li>
            <a href="#signOut" onClick={() => handlePageChange('signOut')}>
              {props.name3}
            </a>
          </li>
        </ul>
      </div>

      {renderPage()}
    </div>
  );
}

export default Sidebar;
