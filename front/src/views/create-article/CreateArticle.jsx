import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function CreateArticle(props) {
  const { data } = props;
  const { title, text, idAsso } = data;

  return (
    <div className="text-center">
      <div className="m-5 rectangle">
        <div className="p-4 row shadow-manuelle info-asso">
          <div className="row">
            <h3 className="fw-bold mb-5">Créer une actualité</h3>
          </div>
          <div className="row mb-4 align-items-end">
            <div className="col-9">
              <div className="form-floating">
                <label htmlFor="floatingTextareaTitle">
                  {'Title de l\'article'}
                  <input className="form-control" placeholder="Leave a comment here" id="floatingTextareaTitle" value={title} />
                </label>
              </div>
            </div>
            <div className="col-3" />
          </div>
          <div className="row align-items-end">
            <div className="col-9">
              <p className="text-start">
                {'Image de l\'actualité'}
              </p>
              <div className="mb-3">
                <input className="form-control rounded-start" type="file" id="formFileImage" />
              </div>
            </div>
          </div>
          <div className="row mt-3 align-items-end">
            <div className="col-9">
              <div className="form-floating">
                <label htmlFor="floatingTextareaTexte">
                  {'Texte de l\'actualité'}
                  <textarea className="form-control h-50" rows="9" placeholder="Texte" id="floatingTextareaTexte">{text}</textarea>
                </label>
              </div>
            </div>
            <div className="col-3">
              <Link to={`/assosSuperAdmin?id=${encodeURIComponent(idAsso)}`} class="mt-4 btn btn-danger postNewsButton">
                {'Poster l\'actualité'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateArticle.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    idAsso: propTypes.string.isRequired
  }).isRequired
};

export default CreateArticle;
