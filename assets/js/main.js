document.documentElement.classList.add('js');

const today = document.querySelector('[data-dose-demo]');

if (today) {
  const buttons = [...today.querySelectorAll('button')];
  const count = today.querySelector('[data-dose-count]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const taken = button.closest('li').classList.toggle('is-taken');
      button.querySelector('[data-dose-label]').textContent = taken ? 'Taken' : 'Mark taken';

      const done = today.querySelectorAll('.is-taken').length;
      count.textContent = `${done} of ${buttons.length} taken`;
    });
  });
}
