import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const amountN = Number(amountEl.value);
  const delayN = Number(delayEl.value);
  const stepN = Number(stepEl.value);

  if (amountN <= 0 || delayN < 0 || stepN < 0) {
    Notiflix.Notify.failure(`❌ Please insert positive numbers`);
    return;
  }

  for (let i = 1; i <= amountN; i += 1) {
    let delays = delayN + stepN * (i - 1);

    createPromise(i, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
