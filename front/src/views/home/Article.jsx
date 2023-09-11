import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Article(props) {
  const { newsItem, association } = props;
  const {
    img, title, text, date
  } = newsItem;
  const { name, logo, id } = association;
  return (
    <div className="card text-center actu my-3">
      <div className="card-header">
        <div className="row">
          <div className="col-1">
            <img src={logo} className="rounded-circle" height="40" width="40" alt="logo" />
          </div>
          <div className="col-3">
            <h3>{name}</h3>
          </div>
          <div className="col-8">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="card-body m-1 p-0">
        <div className="row">
          <div className="col-3 m-0 p-0">
            <img src={img} className="rounded img-article" alt="article" />
          </div>
          <div className="col-9 mt-3">
            <p className="card-text text-truncate">
              {text}
            </p>
            <Link to={`/assosSuperAdmin?id=${encodeURIComponent(id)}`} className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
      <div className="card-footer text-body-secondary">
        {date}
      </div>
    </div>
  );
}

Article.propTypes = {
  newsItem: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    idAsso: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  association: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Article;
