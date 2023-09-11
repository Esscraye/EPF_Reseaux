import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import './404.scss';

function ViewError404() {
  useEffect(() => {
    const container = document.getElementById('container');
    window.onmousemove = function slide(e) {
      const x = -e.clientX / 5;
      const y = -e.clientY / 5;
      container.style.backgroundPositionX = `${x}px`;
      container.style.backgroundPositionY = `${y}px`;
    };
  }, []);

  return (
    <main className="page-error">
      <div id="container">
        <div className="content">
          <h2>404</h2>
          <h4>Oops ! Page not found</h4>
          <p>
            The page you were looking for
            {" doesn't "}
            exist. may have mistypes
            address or the page may have moved.
          </p>
          <Link to={`${config.IP_FRONT}/`}>Back to home</Link>
        </div>
      </div>
    </main>
  );
}

export default ViewError404;
