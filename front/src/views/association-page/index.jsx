import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import config from '../../../config';

function ViewAssociationPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${config.IP_API}/assoc`);
        setCards(response.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  const MtCards = cards.filter((assoc) => assoc.campus === 'Montpellier');
  const CachanCards = cards.filter((assoc) => assoc.campus === 'Cachan');
  const StNazaireCards = cards.filter((assoc) => assoc.campus === 'Saint-Nazaire');
  const TroyesCards = cards.filter((assoc) => assoc.campus === 'Troyes');
  const MultiCards = cards.filter((assoc) => assoc.campus === 'Multicampus');

  return (
    <>
      <div className="mt-2 float-end">
        <a href="/createAssos" className="btn btn-danger mr-2" role="button">Créer assos</a>
      </div>
      <div className="container-fluid">
        <div>
          <h1 className="text-center pt-3 fw-bold">Portail des associations</h1>
          <h4 className="fw-bold px-2 pb-2 title-underline">Montpellier :</h4>
          <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {MtCards.map((assoc) => (
                <Card key={assoc.id} {...assoc} />
              ))}
            </div>
          </div>

          <h4 className="fw-bold px-2 pb-2 title-underline">Paris-Cachan :</h4>
          <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {CachanCards.map((assoc) => (
                <Card key={assoc.id} {...assoc} />
              ))}
            </div>
          </div>

          <h4 className="fw-bold px-2 pb-2 title-underline">Saint-Nazaire :</h4>
          <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {StNazaireCards.map((assoc) => (
                <Card key={assoc.id} {...assoc} />
              ))}
            </div>
          </div>

          <h4 className="fw-bold px-2 pb-2 title-underline">Troyes :</h4>
          <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {TroyesCards.map((assoc) => (
                <Card key={assoc.id} {...assoc} />
              ))}
            </div>
          </div>

          <h4 className="fw-bold px-2 pb-2 title-underline">Multicampus :</h4>
          <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {MultiCards.map((assoc) => (
                <Card key={assoc.id} {...assoc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAssociationPage;
