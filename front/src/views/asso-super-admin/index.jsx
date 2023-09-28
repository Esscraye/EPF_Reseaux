import React from 'react';
import post from './post';
import descriptionAsso from './Description-asso';
import descriptionEquipe from './description-equipe';
import contacts from './prefooter';
import assocBanner from './assoc-banner';
import createActu from './stream';

function ViewAssoSuperAdmin(data) {
  const {
    assoc, userPermission, news
  } = data;

  return (
    <>
      {assocBanner(assoc, userPermission.founder)}
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-8 mt-3">
            {createActu(assoc, userPermission.founder)}
            <div className="card text-center mb-2 nav-filtre-actu asso_admin actu-manuelle">
              {news.map((actu) => post(actu, userPermission.founder, news)).join('')}
            </div>
          </div>
          <div className="col-4 mt-5 d-grid gap-2">
            {descriptionAsso(assoc, userPermission.founder)}
            {descriptionEquipe(assoc, userPermission.founder)}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {contacts(assoc, userPermission.founder)}
      </div>
    </>
  );
}

export default ViewAssoSuperAdmin;
