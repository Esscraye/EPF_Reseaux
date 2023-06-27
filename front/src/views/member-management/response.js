const renderCheckboxRespo = (data) => {
  const resultat = data;
  return (`
   <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label labelResponse" for="flexCheckDefault">
      ${resultat}
    </label>
   </div>
`);
};

export default renderCheckboxRespo;
