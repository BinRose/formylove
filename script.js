console.log("Love Jar loaded ❤️");

const rects = document.querySelectorAll('.rect');
const modal = document.getElementById('loveModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = modal.querySelector('.close');

function openModal(message, bgColor, textColor) {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modalMessage.innerHTML = message;

  // Set modal colors based on rectangle
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.backgroundColor = bgColor;
  modalContent.style.color = textColor;
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// click a rectangle → show modal
rects.forEach(rect => {
  rect.addEventListener('click', () => {
    const message = rect.getAttribute('data-message') || rect.innerHTML;
    const bgColor = rect.style.backgroundColor || '#fff';
    const textColor = rect.style.color || '#000';
    openModal(message, bgColor, textColor);
  });
});

// close button
closeBtn.addEventListener('click', closeModal);

// click outside closes
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ESC closes
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
