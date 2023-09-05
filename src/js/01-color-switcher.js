const startEl = document.querySelector('button[data-start]');
const stopEL = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

stopEL.setAttribute('disabled', 'true');

startEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    const bgColor = getRandomHexColor();
    bodyEl.style.backgroundColor = bgColor;
    startEl.setAttribute('disabled', 'true');
  }, 1000);

  startEl.setAttribute('disabled', 'true');
  stopEL.removeAttribute('disabled');
});

stopEL.addEventListener('click', () => {
  clearInterval(timerId);

  stopEL.setAttribute('disabled', 'true');
  startEl.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
