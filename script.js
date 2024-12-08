// Variables
let portfolioBalance = 100000;
let stockPrice = 100;

// Update Portfolio Display
function updatePortfolioDisplay() {
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = `Balance: $${portfolioBalance}`;
}

// Buy Call Option
document.getElementById('buy-call').addEventListener('click', () => {
  const callCost = 10;
  if (portfolioBalance >= callCost) {
    portfolioBalance -= callCost;
    alert('You bought a Call Option for $10!');
    updatePortfolioDisplay();
  } else {
    alert('Not enough balance to buy a Call Option.');
  }
});

// Buy Put Option
document.getElementById('buy-put').addEventListener('click', () => {
  const putCost = 8;
  if (portfolioBalance >= putCost) {
    portfolioBalance -= putCost;
    alert('You bought a Put Option for $8!');
    updatePortfolioDisplay();
  } else {
    alert('Not enough balance to buy a Put Option.');
  }
});

// Arcade Games
document.getElementById('guess-greeks').addEventListener('click', () => {
  alert('Welcome to "Guess the Greeks"! (Game coming soon)');
});

document.getElementById('theta-slayer').addEventListener('click', () => {
  alert('Welcome to "Theta Slayer"! (Game coming soon)');
});

// Strategy Sandbox
document.getElementById('call-option').addEventListener('click', () => {
  addOptionToStrategy('Call');
});

document.getElementById('put-option').addEventListener('click', () => {
  addOptionToStrategy('Put');
});

function addOptionToStrategy(type) {
  const strategyArea = document.getElementById('strategy-visual');
  const optionElement = document.createElement('div');
  optionElement.className = 'option';
  optionElement.textContent = `${type} Option`;
  strategyArea.appendChild(optionElement);
  drawPayoffChart();
}

function drawPayoffChart() {
  const canvas = document.getElementById('payoff-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Sample chart logic
  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(250, 50);
  ctx.strokeStyle = '#2d87f0';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Update portfolio display on load
updatePortfolioDisplay();
