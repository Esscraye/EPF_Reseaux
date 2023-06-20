const banner = (data) => (`
  <div class="container-fluid text-center">
    <div class="background-img" style="background-image: url(${data.back}); background-size: cover;">
      <div class="row shadow-lg p-2 align-items-center">
        <div class="col-3">
          <img width="200" src="${data.logo}" alt="logo">
        </div>
        <div class="col-6">
          <h1 class="fw-bold">${data.name}</h1>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
`);

export default banner;
