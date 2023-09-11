import React from 'react';
import { Link } from 'react-router-dom';

function Card(data) {
  const assoc = data;
  return (
    <div className="col d-flex contener-manuelle">
      <Link to={`/assosSuperAdmin?id=${encodeURIComponent(assoc.id)}`} className="card card-link m-3 shadow-manuelle box-manuelle">
        <div className="aspect-ratio-wrapper">
          <img src={assoc.logo} className="card-img-top img-manuelle" alt="logo_assos" />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title titre-manuelle">
            {assoc.name}
          </h5>
          <p className="card-text text-manuelle">
            {assoc.descriptionAsso}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
