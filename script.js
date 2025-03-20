// ======================
// Signup Form Validation
// ======================
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate signup success
  alert('Signup successful! Redirecting to login...');
  window.location.href = 'login.html';
});

// =====================
// Login Form Validation
// =====================
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate login success
  alert('Login successful! Redirecting to home...');
  window.location.href = 'index.html';
});

// ======================
// Venue Filters
// ======================
const venueCardsContainer = document.querySelector('.venue-cards');
const blockFilter = document.getElementById('block');
const floorFilter = document.getElementById('floor');
const searchInput = document.querySelector('.filters input');
const searchButton = document.querySelector('.filters button');

// Sample classroom data
const classrooms = [
  { block: 'A', floor: '1', room: 'A101' },
  { block: 'A', floor: '1', room: 'A102' },
  { block: 'A', floor: '2', room: 'A201' },
  { block: 'B', floor: '1', room: 'B101' },
  { block: 'B', floor: '2', room: 'B201' },
  { block: 'C', floor: '1', room: 'C101' },
  { block: 'D', floor: '1', room: 'D101' },
  { block: 'E', floor: '1', room: 'E101' },
  { block: 'F', floor: '1', room: 'F101' },
  { block: 'M', floor: '1', room: 'M101' },
];

// Render classrooms
function renderClassrooms(block = '', floor = '', searchTerm = '') {
  venueCardsContainer.innerHTML = '';
  classrooms.forEach(classroom => {
    const matchesBlock = !block || classroom.block === block;
    const matchesFloor = !floor || classroom.floor === floor;
    const matchesSearch = !searchTerm || classroom.room.toLowerCase().includes(searchTerm.toLowerCase());

    if (matchesBlock && matchesFloor && matchesSearch) {
      const card = document.createElement('div');
      card.className = 'venue-card';
      card.innerHTML = `
        <h3>${classroom.room}</h3>
        <p>Block: ${classroom.block} | Floor: ${classroom.floor}</p>
        <a href="booking.html" class="btn">Book Now</a>
      `;
      venueCardsContainer.appendChild(card);
    }
  });
}

// Initial render
renderClassrooms();

// Add event listeners for filters
searchButton.addEventListener('click', () => {
  renderClassrooms(blockFilter.value, floorFilter.value, searchInput.value);
});

blockFilter.addEventListener('change', () => {
  renderClassrooms(blockFilter.value, floorFilter.value, searchInput.value);
});

floorFilter.addEventListener('change', () => {
  renderClassrooms(blockFilter.value, floorFilter.value, searchInput.value);
});

// ======================
// Booking Form Validation
// ======================
document.getElementById('booking-details').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const classroom = document.getElementById('classroom').value;
  const date = document.getElementById('date').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;
  const purpose = document.getElementById('purpose').value;

  if (!name || !email || !classroom || !date || !startTime || !endTime || !purpose) {
    alert('Please fill out all fields.');
    return;
  }

  if (startTime >= endTime) {
    alert('End time must be after start time.');
    return;
  }

  // Simulate booking success
  alert('Booking confirmed! Redirecting to home...');
  window.location.href = 'index.html';
});
