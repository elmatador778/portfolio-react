// ── LANGUAGE TOGGLE ────────────────────────────────────────
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  const btn = document.querySelector('.lang-toggle');
  btn.textContent = currentLang === 'en' ? 'FR' : 'EN';
  applyLang();
}

function applyLang() {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

// ── PROJECT CARD EXPAND ─────────────────────────────────────
function toggleCard(card) {
  const wasOpen = card.classList.contains('open');
  // close all
  document.querySelectorAll('.card.open').forEach(c => c.classList.remove('open'));
  if (!wasOpen) card.classList.add('open');
}

// ── FOOTER YEAR ─────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
