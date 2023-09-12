import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
import config from '../../../config';

const fetchAssociationDataNews = async () => {
  try {
    const response = await axios.get(`${config.IP_API}/news`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching news data:', error);
  }
};

const fetchAssociationData = async (news) => {
  try {
    const associationData = {};
    const associationIds = news.map((newsItem) => newsItem.idAsso);
    const uniqueAssociationIds = [...new Set(associationIds)];
    const associationDataPromises = uniqueAssociationIds.map(async (associationId) => {
      const response = await axios.get(`${config.IP_API}/assoc/${associationId}`);
      associationData[associationId] = response.data;
    });
    await Promise.all(associationDataPromises);
    return associationData;
  } catch (error) {
    throw new Error('Error fetching association data:', error);
  }
};

function ViewHome() {
  const [news, setNews] = useState({});
  const [assoc, setAssoc] = useState({});

  useEffect(() => {
    (async () => {
      const newsData = await fetchAssociationDataNews();
      setNews(newsData);

      const associationData = await fetchAssociationData(newsData);
      setAssoc(associationData);
    })();
  }, []);

  return (
    <div className="row back-im">
      <div className="col-1" />
      <div className="col-6 my-2 p-3 nav-filtre-actu">
        {news[0] && Object.keys(assoc)[0] && news.map((newsItem) => (
          <Article key={newsItem.id} newsItem={newsItem} association={assoc[newsItem.idAsso]} />
        ))}
      </div>
      <section className="col-5 contener-info-asso">
        <div className="info-asso">
          <div className="texte-asso">
            <h2>Notre Asso</h2>
            <p>
              Découvrez notre nouvel intranet scolaire à
              {" l'EPF !"}
              Fini Facebook et les services cloud éparpillés,
              {' '}
            </p>
            <p>
              notre plateforme centralisée facilitera la communication,
              la protection des données et la visibilité
              {' '}
            </p>
            <p>
              des actions associatives. Avec des fonctionnalités sur mesure
              et une sécurité renforcée, notre intranet
              {' '}
            </p>
            <p>améliorera la vie étudiante et associative sans perturber le réseau existant.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewHome;
