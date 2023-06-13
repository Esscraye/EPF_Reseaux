const btn = () => (`
  <button type="button" class="btn btn-danger ModifierContact">Modifier</button>
`);

export default (data, permissions) => {
  const {
    mail, phone, instagram, discord, twitter, facebook, linkedin
  } = data;
  const { assoc } = permissions;
  return (`
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-2">
          <p>Contact us :</p>
        </div>
        <div class="col-2">
          <p>${mail}</p>
        </div>
        <div class="col-2">
          <p>${phone}</p>
        </div>
        <div class="col-2">
          <p>Réseaux sociaux :</p>
        </div>
        <div class="col-2">
          <a href="${instagram}" target="_blank" class=""><i class="ri-instagram-fill"></i></a>
          <a href="${discord}" target="_blank" class=""><i class="ri-discord-fill"></i></a>
          <a href="${twitter}" target="_blank" class=""><i class="ri-twitter-fill"></i></a>
          <a href="${facebook}" target="_blank" class=""><i class="ri-facebook-box-fill"></i></a>
          <a href="${linkedin}" target="_blank" class=""><i class="ri-linkedin-box-fill"></i></a>
        </div>
        <div class="col-2">
          ${assoc.update ? btn() : ''}
        </div>
      </div>
    </div>
  `);
};
