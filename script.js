// ===== Elements =====
const showEmailBtn = document.getElementById('showEmail');
const showPhoneBtn = document.getElementById('showPhone');
const backbtn = document.getElementById('backbtn');
const contactOptions = document.querySelector('.contact-options');
const hiddenSection = document.querySelector('.hidden-section');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const contactForm = document.getElementById('contactForm');

// ===== Functions =====
function showInput(type) {
  contactOptions.style.display = 'none'; // hide buttons
  hiddenSection.style.display = 'block';  // show inputs
  if (type === 'email') {
    emailInput.classList.remove('hidden');
    phoneInput.classList.add('hidden');
  } else if (type === 'phone') {
    phoneInput.classList.remove('hidden');
    emailInput.classList.add('hidden');
  }
}

function goBack() {
  hiddenSection.style.display = 'none';   // hide inputs
  contactOptions.style.display = 'block';  // show buttons
  emailInput.classList.add('hidden');
  phoneInput.classList.add('hidden');
}

// ===== Event Listeners =====
showEmailBtn.addEventListener('click', () => showInput('email'));
showPhoneBtn.addEventListener('click', () => showInput('phone'));
backbtn.addEventListener('click', goBack);

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  let contactValue = '';

  if (!emailInput.classList.contains('hidden')) {
    contactValue = emailInput.value.trim();
  } else if (!phoneInput.classList.contains('hidden')) {
    contactValue = phoneInput.value.trim();
  }

  if (!name || !contactValue) {
    alert('Please fill out all required fields.');
    return;
  }

  // Redirect to Thank You page
  window.location.href = 'thankyou.html';
});

