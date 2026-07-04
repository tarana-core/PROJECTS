function calculateDahej() {
  const age = parseInt(document.getElementById('age').value) || 0;
  const salary = parseInt(document.getElementById('salary').value) || 0;
  const profession = parseInt(document.getElementById('profession').value) || 0;
  const car = parseInt(document.getElementById('car').value) || 0;
  const house = document.getElementById('house').value || 0;
  if (car < 0) {
    alert("Vehicle count cannot be negative");
    return;
  }

  if (!age || salary <= 0 || profession <= 0 || house === "0") {
    document.getElementById("result").innerHTML =
      "Please fill all required fields.";
    return;
  }

  let ageValue = 0;

  if (age >= 35) {
    ageValue = 0;
  } else if (age >= 30) {
    ageValue = 20000;
  } else if (age >= 24) {
    ageValue = 10000;
  }

  let HouseValue = 0;
  if (house === 'rent') {
    HouseValue = 0;
  } else if (house === 'self') {
    HouseValue = 300000;
  } else if (house === 'parent') {
    HouseValue = 100000;
  }



  const yearlyIncome = salary * 12;
  const vehicleValue = car * 200000;

  const total = yearlyIncome + profession + vehicleValue + ageValue + HouseValue;

  const resultAlert = `<span style="color:#e11d48; font-weight: 700;">'Asking for dowry is a criminal offence!'</span>`;

  document.getElementById('result').innerHTML = `
<h3>Estimated  Value: 
<strong>₹${total.toLocaleString('en-IN')}</strong></h3> 
<br>${resultAlert}
`;
}
const contactButton = document.querySelector('#sendBtn');
if (contactButton) {
  contactButton.addEventListener('click', function () {
    const email = document.querySelector('.contact input[type="email"]').value.trim();
    const message = document.querySelector('.contact input[type="text"]').value.trim();

    if (!email || !message) {
      alert('Please fill your email and message before sending.');
      return;
    }

    alert('Thank you! Your message has been submitted successfully.');
    document.querySelector('.contact input[type="email"]').value = '';
    document.querySelector('.contact input[type="text"]').value = '';
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
  body.style.opacity = '0.95';
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
