// CRONÔMETRO DE URGÊNCIA (3 dias a partir de agora)
function startCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // +3 dias
  targetDate.setHours(23, 59, 59, 999);

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / (3600000));
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// ROLAGEM SUAVE PARA LINKS ÂNCORA (ex: #oferta, #beneficios)
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// INICIALIZAÇÃO QUANDO O DOM ESTIVER PRONTO
document.addEventListener('DOMContentLoaded', function() {
  startCountdown();
  initSmoothScroll();
});