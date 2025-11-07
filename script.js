// ===== Elements =====
const showEmailBtn = document.getElementById('showEmail');
const showPhoneBtn = document.getElementById('showPhone');
const backBtn = document.getElementById('backbtn');
const contactOptions = document.querySelector('.contact-options');
const hiddenSection = document.querySelector('.hidden-section');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const contactForm = document.getElementById('contactForm');

// ===== Functions =====
function showInput(type) {
  // Hide option buttons
  if (contactOptions) contactOptions.style.display = 'none';

  // Show input section
  if (hiddenSection) {
    hiddenSection.style.display = 'flex';
    hiddenSection.style.flexDirection = 'column'; // stack inputs vertically
    hiddenSection.style.flexWrap = 'nowrap';
    hiddenSection.style.justifyContent = 'center';
    hiddenSection.style.alignItems = 'center';
    hiddenSection.style.gap = '12px';
  }

  // Show the correct input field
  if (type === 'email') {
    if (emailInput) emailInput.classList.remove('hidden');
    if (phoneInput) phoneInput.classList.add('hidden');
  } else if (type === 'phone') {
    if (phoneInput) phoneInput.classList.remove('hidden');
    if (emailInput) emailInput.classList.add('hidden');
  }
}

function goBack() {
  if (hiddenSection) hiddenSection.style.display = 'none';
  if (contactOptions) contactOptions.style.display = 'flex';

  if (emailInput) emailInput.classList.add('hidden');
  if (phoneInput) phoneInput.classList.add('hidden');
}

// ===== Event Listeners =====
if (showEmailBtn) showEmailBtn.addEventListener('click', () => showInput('email'));
if (showPhoneBtn) showPhoneBtn.addEventListener('click', () => showInput('phone'));
if (backBtn) backBtn.addEventListener('click', goBack);

// ===== Form Validation =====
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const nameInput = document.getElementById('name');
    const name = nameInput ? nameInput.value.trim() : '';
    let contactValue = '';

    if (emailInput && !emailInput.classList.contains('hidden')) {
      contactValue = emailInput.value.trim();
    } else if (phoneInput && !phoneInput.classList.contains('hidden')) {
      contactValue = phoneInput.value.trim();
    }

    if (!name || !contactValue) {
      e.preventDefault();
      alert('Please fill out all required fields.');
    }
    // Otherwise, allow submission (FormSubmit handles it)
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {

      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.faq-toggle');

      // Close any other open FAQ items
      document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
        if (openAnswer !== answer) {
          openAnswer.style.maxHeight = null;
          openAnswer.classList.remove('open');
          openAnswer.previousElementSibling.querySelector('.faq-toggle').classList.remove('rotate');
        }
      });

      // Toggle clicked FAQ
      if (answer.classList.contains('open')) {
        answer.style.maxHeight = null;
        answer.classList.remove('open');
        toggle.classList.remove('rotate');
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add('open');
        toggle.classList.add('rotate');
      }
    });
  });

});

