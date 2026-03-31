
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


document.addEventListener("DOMContentLoaded", function () {

  // ===== ISSUE FIELD =====
  const issueOtherRadio = document.getElementById('issue-other');
  const issueOtherText = document.getElementById('issue-other-text');
  const issueOtherInput = document.getElementById('issue-other-input');
  const issueRadios = document.querySelectorAll('input[name="issue"]');

  issueRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (issueOtherRadio.checked) {
        issueOtherText.style.display = 'block';
        issueOtherInput.required = true;
      } else {
        issueOtherText.style.display = 'none';
        issueOtherInput.required = false;
        issueOtherInput.value = '';
      }
    });
  });

  // ===== POS FIELD =====
  const posOtherRadio = document.getElementById('pos-other');
  const posOtherText = document.getElementById('pos-other-text');
  const posOtherInput = document.getElementById('pos-other-input');
  const posRadios = document.querySelectorAll('input[name="POS"]');

  posRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (posOtherRadio.checked) {
        posOtherText.style.display = 'block';
        posOtherInput.required = true;
      } else {
        posOtherText.style.display = 'none';
        posOtherInput.required = false;
        posOtherInput.value = '';
      }
    });
  });

});
