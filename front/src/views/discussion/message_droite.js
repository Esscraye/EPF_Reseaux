import hour from './heure_envoi';

export default (data) => (`
  ${hour(data.times)}
  <div class="row justify-content-end me-1 text-end">
    <div class="position-mess">
    <div class="fw-lighter fst-italic">${data.author.firstName} ${data.author.lastName}</div>
      <div class="message-txt-droite">
        ${data.text} 
      </div>
    </div>
  </div>
`);
