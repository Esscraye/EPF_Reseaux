import Block from './choix_discu';

export default () => (`
    <div class="row mt-1">
        <h4 class="text-white text-center mt-2 mb-2">Groupes</h4>
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
        ${Block()}
    </div>
    <div class="row mt-3">
        <h4 class="text-white text-center">Individuel</h4>
        ${Block()}
        ${Block()}
        ${Block()}
    </div>
`);
