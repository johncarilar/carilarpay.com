function toggleInput(option) {
    document.getElementById('emailInput').style.display = (option === 'email') ? 'block' : 'none';
    document.getElementById('phoneInput').style.display = (option === 'phone') ? 'block' : 'none';
  }
  function toggleInput(method) {
    // Show the hidden section
    document.getElementById('contactDetails').style.display = 'block';
  
    // Hide both fields first
    document.getElementById('emailInput').classList.add('hidden');
    document.getElementById('phoneInput').classList.add('hidden');
  
    // Show relevant field
    if (method === 'email') {
      document.getElementById('emailInput').classList.remove('hidden');
    } else if (method === 'phone') {
      document.getElementById('phoneInput').classList.remove('hidden');
    }
  }
  document.getElementById('showEmail').addEventListener('click', () => {
    document.querySelector('.hidden-section').style.display = 'block';
    document.getElementById('emailInput').classList.remove('hidden');
    document.getElementById('phoneInput').classList.add('hidden');
  });
  
  document.getElementById('showPhone').addEventListener('click', () => {
    document.querySelector('.hidden-section').style.display = 'block';
    document.getElementById('phoneInput').classList.remove('hidden');
    document.getElementById('emailInput').classList.add('hidden');
  });