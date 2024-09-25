// script.js
const card = document.querySelector('.card');
const nextBtns = document.querySelectorAll('#next-btn');

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetClass = btn.dataset.target;
    card.classList.remove('show-front', 'show-back', 'show-details');
    card.classList.add(`show-${targetClass}`);
  });
});