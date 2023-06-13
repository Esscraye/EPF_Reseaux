import block from './choix_discu';

export default (choicesG, choicesP) => (`
  <div class="row mt-1">
    <h4 class="text-white text-center mt-2 mb-2 py-2">Groupes</h4>
    ${choicesG.map((post) => block(post))}
  </div>
  <div class="row mt-3">
    <h4 class="text-white text-center py-2">Individuel</h4>
    ${choicesP.map((post) => block(post))}
  </div>
`);
