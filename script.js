const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const f = btn.dataset.filter;
  buttons.forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
  cards.forEach(c => { c.hidden = !(f === 'all' || c.dataset.tags.split(' ').includes(f)); });
}));
