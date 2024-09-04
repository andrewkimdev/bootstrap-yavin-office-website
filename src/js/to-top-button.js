function activateToTopBtn() {
  const toTopBtn = document.querySelector("#to-top");
  const threshold = 50;
  window.addEventListener('scroll', () => {
    window.scrollY > threshold
      ? toTopBtn.classList.add('show')
      : toTopBtn.classList.remove('show')
  });
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', activateToTopBtn);

document.querySelector('#to-top').addEventListener('click', scrollToTop);
