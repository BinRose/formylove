console.log("Love Jar loaded ❤️");

const rects = document.querySelectorAll('.rect');
const modal = document.getElementById('loveModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = modal.querySelector('.close');

// Open modal with dynamic content and color
function openModal(message, bgColor = '#fff', textColor = '#000') {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modalMessage.innerText = message;
  modal.querySelector('.modal-content').style.backgroundColor = bgColor;
  modal.querySelector('.modal-content').style.color = textColor;
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// Click a rectangle → show modal
rects.forEach(rect => {
  rect.addEventListener('click', () => {
    const message = rect.getAttribute('data-message');
    const bgColor = rect.style.backgroundColor || '#fff';
    const textColor = rect.style.color || '#000';
    openModal(message, bgColor, textColor);
  });
});

// Close modal button
closeBtn.addEventListener('click', closeModal);

// Click outside modal closes it
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ESC key closes modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});