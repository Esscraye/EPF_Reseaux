const renderCheckboxMembre = (data) => {
  const resultat = data;
  return (`
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label labelResultat" for="flexCheckDefault">
        ${resultat}
      </label>
    </div>
  `);
};

export default renderCheckboxMembre;
