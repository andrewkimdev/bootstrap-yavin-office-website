function incrementStats() {
  const counters = document.querySelectorAll('.counter[data-target]');

  counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;
      const increment = target / 50;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }

    requestAnimationFrame(updateCounter)
  });
}

document.addEventListener('DOMContentLoaded', incrementStats);
