import block from './choix_discu';

export default (data) => {
  const groupChoices = data.conversations.filter((conv) => conv.type === 'group');
  const individualChoices = data.conversations.filter((conv) => (conv.type === 'individual' && conv.censure === false));

  const groupChoicesHTML = groupChoices.map((conversation) => block(conversation)).join('');
  const individualChoicesHTML = individualChoices.map((conversation) => block(conversation)).join('');

  return (`
    <div class="row mt-1">
      <h4 class="text-white text-center mt-2 mb-2 py-2">Groupes</h4>
      ${groupChoicesHTML}
    </div>
    <div class="row mt-3">
      <h4 class="text-white text-center py-2">Individuel</h4>
      ${individualChoicesHTML}
    </div>
  `);
};
