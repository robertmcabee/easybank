const hideModal = document.querySelector('.hide-modal');
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');

hideModal.addEventListener('click', () => {
  modal.classList.add('hidden')
  hideModal.classList.add('hidden')
  showModal.classList.remove('hidden')
});

showModal.addEventListener('click', () => {
  modal.classList.remove('hidden')
  showModal.classList.add('hidden')
  hideModal.classList.remove('hidden')
});

modal.addEventListener('mousedown', (e) => {
  if (e.target.tagName === "DIV") {
    modal.classList.add('hidden')
    hideModal.classList.add('hidden')
    showModal.classList.remove('hidden')
  }
});

