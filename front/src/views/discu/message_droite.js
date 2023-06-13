import nom from './nom';

export default (messages) => (`
  <div class="row justify-content-end me-1 text-end">
    <div class="col-9"></div>
    <div class="col-3">
      ${nom(messages.author)}
      <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-end shadow text-center">
        ${messages.text} 
      </div>
    </div>
  </div>
  `);
