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
  // Flip card when scrolling to a certain point

  document.addEventListener('DOMContentLoaded', function () {
    const flipCard = document.querySelector('.flip-card');
  
    if (flipCard) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the flipped class when the card is in view
            flipCard.classList.add('flipped');
  
            // Stop observing so it only flips once
            observer.unobserve(flipCard);
          }
        });
      }, { threshold: 0.5 }); // 50% of the element must be visible
  
      observer.observe(flipCard);
    }
  });
  


