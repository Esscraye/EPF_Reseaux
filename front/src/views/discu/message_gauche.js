import nom from './nom';

export default (leftMess, sender) => (`
  <div class="row justify-content-start text-start">
    <div class="col-3">
      ${nom(sender)}
      <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-end shadow text-center">
        ${leftMess.message}  
      </div>
    </div>
  </div>
`);
