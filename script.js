console.log("Love Jar loaded ❤️");

const rects = document.querySelectorAll('.rect');
const modal = document.getElementById('loveModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = modal.querySelector('.close');

// One long letter per emotion
const messages = {
  sad: `Langga, I know there will be days when sadness quietly creeps in and makes your heart feel heavy. On those days, please remember that you never have to carry that weight alone. I am here, always, to hold you close, to listen, and to remind you how loved you truly are. It’s okay to cry, it’s okay to pause, and it’s okay to feel fragile — none of that makes you any less strong. To me, you are more than your sadness, you are the light that brightens my world, even when you can’t see it yourself. I’ll sit with you in the dark until you’re ready to step into the light again, and I promise to never let go of your hand.`,

  jealous: `Langga, I understand that sometimes little worries or doubts can sneak into your heart. Please don’t ever think you are not enough, because you are everything I could ever want and more. No one else could ever take your place — not in my heart, not in my life, not in my dreams. You are the one I choose, every single day, in every possible way. When jealousy tries to make you question my love, I hope you remember this truth: my heart belongs only to you. You are my home, my safe place, my constant. I am yours, and only yours, for as long as I live.`,

  tired: `Langga, I see the way you give so much of yourself every single day — your effort, your time, your strength, even when you’re worn out. I want you to know that it’s okay to rest, to slow down, to take a break without guilt. You don’t need to prove anything to me — your worth is never measured by how much you can do, but simply by who you are. Even in your most exhausted moments, you inspire me with your dedication and your heart. Please let me be your comfort when you’re tired, the one who reminds you to take care of yourself. I’ll be here, proud of you always, holding you close, whispering that you are enough exactly as you are.`,

  happy: `Langga, your smile is one of the most beautiful things I have ever seen, and your laughter is my favorite melody. When you are happy, the world feels brighter, lighter, and full of endless possibilities. Your joy becomes my joy, your light becomes mine too. I wish for you a life filled with moments like these — pure, simple happiness that warms your soul. Hold onto these feelings and let them guide you through the harder days. And always remember: nothing makes me happier than seeing you smile. You are my sunshine, my sweetest blessing, and my reason for believing in love the way I do.`,

  anxious: `Langga, I know there are times when your thoughts become too loud, when your chest feels heavy and your heart beats faster than it should. In those moments, I want you to pause, to breathe slowly with me, and to remember that you are safe. You are not alone in your fears — I am here to share the weight of them with you. Whatever storms may rise in your mind, I will be your calm, your anchor, your reminder that you are stronger than you believe. I trust you, I believe in you, and I love you exactly as you are. So whenever the world feels too overwhelming, let me be your quiet place, your gentle reminder that everything will be okay, because I’ll never leave your side.`
};

function openModal(type, color) {
  modalMessage.textContent = messages[type];

  const modalBox = modal.querySelector('.modal-content');
  modalBox.style.background = color;    // same bg as rectangle
  modalBox.style.borderColor = '#000';  // black border
  modalBox.style.color = '#000';        // keep text black

  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// rectangle clicks
rects.forEach(rect => {
  rect.addEventListener('click', () => {
    const type = rect.getAttribute('data-type');
    const bgColor = rect.style.backgroundColor;
    openModal(type, bgColor);
  });
});

// close button
closeBtn.addEventListener('click', closeModal);

// click outside
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ESC closes
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});