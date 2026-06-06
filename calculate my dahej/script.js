
function calculateDahej() {
  const name = document.getElementById('name').value.trim();
  const salary = parseInt(document.getElementById('salary').value) || 0;
  const profession = parseInt(document.getElementById('profession').value) || 0;
  const car = parseInt(document.getElementById('car').value) || 0;
  const age =parseInt(document.getElementById('age').value) || 0;

  if (!age || salary <= 0) {
    document.getElementById('result').innerHTML =
      'Please enter your age and valid monthly salary.';
    return;
  }
  if (age<18) {
    document.getElementById('result').innerHTML =
      'Please check your age !(age must be 18+).';
    return;
  }
  

  const yearlyIncome = salary * 12;
  const vehicleValue = car * 400000;
  const total = yearlyIncome + profession + vehicleValue;

  let resultAlert = 'Asking for dowry is a criminal offence!';


  document.getElementById('result').innerHTML = `
    <strong>${name}</strong><br>
    Estimated Profile Value: <strong>₹${total.toLocaleString('en-IN')}</strong><br>
    Category: <strong>${resultAlert}</strong>
  `;
}

const contactButton = document.querySelector('#contact button');
if (contactButton) {
  contactButton.addEventListener('click', function () {
    const email = document.querySelector('#contact input[type="email"]').value.trim();
    const message = document.querySelector('#contact input[type="text"]').value.trim();

    if (!email || !message) {
      alert('Please fill your email and message before sending.');
      return;
    }

    alert('Thank you! Your message has been submitted successfully.');
    document.querySelector('#contact input[type="email"]').value = '';
    document.querySelector('#contact input[type="text"]').value = '';
  });
}

// smooth scroll navigation
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// dark mode toggle
const toggleBtn = document.getElementById('darkToggle');
const body = document.body;

// load saved mode
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.innerHTML = '☀️ Light Mode';
  toggleBtn.classList.add('darkToggleActive');
}

toggleBtn.addEventListener('click', () => {
  body.style.opacity = '0.98';
  setTimeout(() => {
    body.style.opacity = '1';
  }, 150);
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.innerHTML = '☀️ Light Mode';
    toggleBtn.classList.add('darkToggleActive');
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.innerHTML = '🌙 Dark Mode';
    toggleBtn.classList.remove('darkToggleActive');
  }
});
