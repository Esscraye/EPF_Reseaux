import hour from './heure_envoi';

export default (data) => (`
  ${hour(data.times)}
  <div class="row justify-content-start text-start">
    <div class="col-3">
      <div class="fw-lighter fst-italic">${data.author.firstName} ${data.author.lastName}</div>
      <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-end shadow text-center">
        ${data.text}  
      </div>
    </div>
  </div>
`);
