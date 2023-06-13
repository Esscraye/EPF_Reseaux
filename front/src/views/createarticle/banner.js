const banner = (data) => (`
  <div class="container-fluid text-center">
    <div class="row shadow-lg p-2 align-items-center">
      <div class="col-2">
        <img width="200" src="${data.logo}" alt="logo">
      </div>
      <div class="col-8">
        <h1 class="fw-bold">${data.name}</h1>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
`);

export default banner;
