import React from 'react';

function Respo(data) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label labelResponse" htmlFor="flexCheckDefault">
        {data}
      </label>
    </div>
  );
}

export default Respo;
