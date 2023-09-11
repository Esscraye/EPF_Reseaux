import React from 'react';

function Member(data) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label labelResultat" htmlFor="flexCheckDefault">
        {data}
      </label>
    </div>
  );
}

export default Member;
