import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateArticle from './CreateArticle';
import Banner from './Banner';
import config from '../../../config';

const fetchAssociationDataNews = async () => {
  const queryString = window.location.search;
  const url = new URLSearchParams(queryString);
  const id = url.get('id'); // id de la news
  // console.log('idNews', id);
  try {
    const response = await axios.get(`${config.IP_API}/news/${id}`);
    return response.data;
    // console.log('coucou les loulous je suis dans le constructeur du front', this.data.news);
  } catch (error) {
    throw new Error(error);
    // Gérer l'erreur
  }
};

const fetchAssociationDataAsso = async () => {
  const queryString = window.location.search;
  const url = new URLSearchParams(queryString);
  const id = url.get('id');
  try {
    const response = await axios.get(`${config.IP_API}/assoc/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
    // Gérer l'erreur
    // console.log('coucou les asso', this.data.assoc);
  }
};

function runCreate() {
  const postNews = document.querySelector('.postNewsButton');
  postNews.addEventListener('click', () => {
    const newsTitleInput = document.querySelector('#floatingTextareaTitle');
    const newsTextInput = document.querySelector('#floatingTextareaTexte');
    const newsImgInput = document.querySelector('#formFileImage');
    const newsImg = newsImgInput.files[0];
    // console.log('newsImgInput.files', newsImgInput);
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const id = url.get('id');
    // on récupere la date
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
    if (newsTitleInput.value === '' || newsTextInput.value === '' || newsImgInput.files[0] === null) {
      // alert('Il faut remplir tous les champs'); // need to be recode alert()
    } else {
      const allowedExtensions = /(\.jpg|\.jpeg)$/i;
      if (!allowedExtensions.test(newsImg.name)) {
        // alert('Seuls les fichiers JPEG sont autorisés.'); // need to be recode alert()
        return;
      }

      const formData = {
        title: newsTitleInput.value,
        text: newsTextInput.value,
        date: formattedDate,
        img: newsImgInput.files[0],
        idAsso: id
      };

      if (id) {
        axios.put(`${config.IP_API}/news/${id}`, formData)
          .then(() => {
            // console.log(response);
            // Mise à jour réussie, effectuer les actions nécessaires
          })
          .catch((error) => {
            throw error;
            // Gérer l'erreur lors de la mise à jour
          });
      } else {
        axios.post(`${config.IP_API}/news`, formData)
          .then(() => {
            // console.log(response);
            // Publication réussie, effectuer les actions nécessaires
          })
          .catch((error) => {
            throw error;
            // Gérer l'erreur lors de la publication
          });
      }
      // Vider les champs de saisie
      newsTitleInput.value = '';
      newsTextInput.value = '';
      const newFileInput = document.createElement('input');
      newFileInput.id = 'formFileImage';
      newFileInput.type = 'file';
      newsImgInput.parentNode.replaceChild(newFileInput, newsImgInput);
    }
  });
}

function ViewCreateArticle() {
  const [news, setNews] = useState({});
  const [assoc, setAssoc] = useState({});

  useEffect(() => {
    (async () => {
      const newsData = await fetchAssociationDataNews();
      setNews(newsData);

      const associationData = await fetchAssociationDataAsso();
      setAssoc(associationData);
    })();
  }, []);

  return (
    <div className="row">
      <Banner data={assoc} />
      {news[0] && Object.keys(assoc)[0] && news.map((newsItem) => (
        <CreateArticle key={newsItem} data={newsItem} />
      ))}
    </div>
  );
}

export default ViewCreateArticle;
