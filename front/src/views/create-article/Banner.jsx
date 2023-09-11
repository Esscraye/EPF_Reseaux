import React from 'react';
import propTypes from 'prop-types';

function Banner(props) {
  const { data } = props;
  const { name, logo, back } = data;
  return (
    <div className="container-fluid text-center">
      <div className="background-img" style={`background-image: url(${back}); background-size: cover;`}>
        <div className="row shadow-lg p-2 align-items-center">
          <div className="col-3">
            <img width="200" src={logo} alt="logo" />
          </div>
          <div className="col-6">
            <h1 className="fw-bold">
              {name}
            </h1>
          </div>
          <div className="col-3" />
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  data: propTypes.shape({
    name: propTypes.string.isRequired,
    logo: propTypes.string.isRequired,
    back: propTypes.string.isRequired
  }).isRequired
};

export default Banner;
