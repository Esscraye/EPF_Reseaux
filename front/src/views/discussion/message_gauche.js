import hour from './heure_envoi';

export default (data) => (`
  ${hour(data.times)}
  <div class="row justify-content-start text-start">
    <div class="position-mess">
      <div class="fw-lighter fst-italic">${data.author.firstName} ${data.author.lastName}</div>
      <div class="message-txt-gauche">
        ${data.text}  
      </div>
    </div>
  </div>
`);
