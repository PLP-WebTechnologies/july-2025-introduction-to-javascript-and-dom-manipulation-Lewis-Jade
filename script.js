//  PART 1: Variables, Conditionals, and Basic I/O
document.getElementById('greet-btn').addEventListener('click', () => {
  const name = document.getElementById('username').value.trim();
  const output = document.getElementById('greeting-output');

  if (name) {
    output.textContent = `Hello, ${name}! 👋`;
  } else {
    output.textContent = `Please enter your name.`;
  }
});

//  PART 2: Functions — Reusable Logic
function calculateTotal(price, tax) {
  return price + (price * tax);
}

function showTotal() {
  const total = calculateTotal(100, 0.08); // Example: 100 with 8% tax
  document.getElementById('total-output').textContent = `Total: $${total.toFixed(2)}`;
}

//  PART 3: Loops — Countdown and List Generation
function startCountdown() {
  const list = document.getElementById('countdown-list');
  list.innerHTML = ''; // Clear existing items
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement('li');
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
}

//  PART 4: DOM Manipulation
// 1. Toggle a class on click
document.getElementById('toggle-btn').addEventListener('click', () => {
  document.getElementById('toggle-text').classList.toggle('highlight');
});

// 2. Add a new list item dynamically
document.getElementById('add-item').addEventListener('click', () => {
  const list = document.getElementById('dynamic-list');
  const li = document.createElement('li');
  li.textContent = `New item added at ${new Date().toLocaleTimeString()}`;
  list.appendChild(li);
});

// 3. Modify element content on load (bonus)
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-text').textContent += " (DOM Loaded!)";
});
