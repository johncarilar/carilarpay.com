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
  contactOptions.style.display = 'none';    // hide email/phone buttons
  hiddenSection.style.display = 'flex';     // show input section
  hiddenSection.style.flexDirection = 'row'; // keep inputs horizontal
  hiddenSection.style.flexWrap = 'wrap';
  hiddenSection.style.justifyContent = 'center';
  hiddenSection.style.alignItems = 'center';

  // Show correct input and hide the other
  if (type === 'email') {
    emailInput.classList.remove('hidden');
    phoneInput.classList.add('hidden');
  } else if (type === 'phone') {
    phoneInput.classList.remove('hidden');
    emailInput.classList.add('hidden');
  }
}

function goBack() {
  hiddenSection.style.display = 'none';  // hide inputs
  contactOptions.style.display = 'flex'; // show buttons
  emailInput.classList.add('hidden');
  phoneInput.classList.add('hidden');
}

// ===== Event Listeners =====
showEmailBtn.addEventListener('click', () => showInput('email'));
showPhoneBtn.addEventListener('click', () => showInput('phone'));
backBtn.addEventListener('click', goBack);

// ===== Optional: local form validation (FormSubmit handles actual submission) =====
contactForm.addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  let contactValue = '';

  if (!emailInput.classList.contains('hidden')) {
    contactValue = emailInput.value.trim();
  } else if (!phoneInput.classList.contains('hidden')) {
    contactValue = phoneInput.value.trim();
  }

  if (!name || !contactValue) {
    e.preventDefault(); // stop form submission
    alert('Please fill out all required fields.');
  }
  // Otherwise, form submits to FormSubmit and redirects via _next hidden field
});
