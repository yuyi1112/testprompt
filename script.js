const today = new Date();
today.setHours(0, 0, 0, 0);

const performanceDate = new Date(2026, 10, 24);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysRemaining = Math.ceil((performanceDate - today) / millisecondsPerDay);

document.getElementById('倒數').textContent = daysRemaining;