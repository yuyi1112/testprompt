const countdown = document.getElementById('倒數');
const tourDates = [...document.querySelectorAll('.tour-date time')];

function updateTourCountdown() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextStop = tourDates.find((date) => new Date(`${date.dateTime}T00:00:00`) >= today);

  if (!nextStop) {
    countdown.textContent = '2026 巡演已圓滿落幕，謝謝你一路同行。';
    return;
  }

  const nextDate = new Date(`${nextStop.dateTime}T00:00:00`);
  const daysRemaining = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
  const city = nextStop.closest('.tour-stop').querySelector('.tour-venue h3').childNodes[0].textContent.trim();

  countdown.textContent = daysRemaining === 0
    ? `今天 ${city} 見，準備好一起唱了嗎？`
    : `距離 ${city} 場還有 ${daysRemaining} 天`;
}

updateTourCountdown();
window.setInterval(updateTourCountdown, 60 * 1000);
