function userScroll() {
  const navbar = document.querySelector(".navbar");
  const threshold = 50;
  window.addEventListener('scroll', () => {
    window.scrollY > threshold
      ? navbar.classList.add('navbar-sticky')
      : navbar.classList.remove('navbar-sticky')
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
