import React from 'react';
import { Link } from 'react-router-dom';

function Card(data) {
  const assoc = data;
  const { id, name, logo, descriptionAsso } = assoc;
  return (
    <div className="col d-flex contener-manuelle">
      <Link to={`/assosSuperAdmin?id=${encodeURIComponent(id)}`} className="card card-link m-3 shadow-manuelle box-manuelle">
        <div className="aspect-ratio-wrapper">
          <img src={logo} className="card-img-top img-manuelle" alt="logo_assos" />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title titre-manuelle">
            {name}
          </h5>
          <p className="card-text text-manuelle">
            {descriptionAsso}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
