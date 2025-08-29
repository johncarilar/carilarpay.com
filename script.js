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
  contactOptions.style.display = 'none';       // hide buttons
  hiddenSection.style.display = 'flex';        // show input section
  hiddenSection.style.flexDirection = 'row';   // keep inputs horizontal
  hiddenSection.style.flexWrap = 'wrap';
  hiddenSection.style.justifyContent = 'center';
  hiddenSection.style.alignItems = 'center';

  // Show correct input
  if (type === 'email') {
    emailInput.classList.remove('hidden');
    phoneInput.classList.add('hidden');
  } else {
    phoneInput.classList.remove('hidden');
    emailInput.classList.add('hidden');
  }
}

function goBack() {
  hiddenSection.style.display = 'none';       // hide input section
  contactOptions.style.display = 'flex';      // show buttons
  emailInput.classList.add('hidden');
  phoneInput.classList.add('hidden');
}

// ===== Event Listeners =====
showEmailBtn.addEventListener('click', () => showInput('email'));
showPhoneBtn.addEventListener('click', () => showInput('phone'));
backBtn.addEventListener('click', goBack);

// ===== Form Validation =====
contactForm.addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  let contactValue = '';

  if (!emailInput.classList.contains('hidden')) {
    contactValue = emailInput.value.trim();
  } else if (!phoneInput.classList.contains('hidden')) {
    contactValue = phoneInput.value.trim();
  }

  // If any required field is empty, block submission
  if (!name || !contactValue) {
    e.preventDefault();
    alert('Please fill out all required fields.');
  }
  // Otherwise, do NOT call preventDefault: FormSubmit handles submission
});
