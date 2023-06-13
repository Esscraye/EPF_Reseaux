import nom from './nom';

export default (data) => (`
  <div class="row justify-content-start text-start">
    <div class="col-3">
      ${nom(data.author)}
      <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-end shadow text-center">
        ${data.text}  
      </div>
    </div>
  </div>
`);
