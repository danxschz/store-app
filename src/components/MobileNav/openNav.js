const openNav = () => {
  const nav = document.querySelector('#nav');
  const overlay = document.querySelector('#overlay-nav');

  nav.style.width = '80%';
  overlay.style.height = 'auto';
  overlay.style.opacity = 0.8;
}

const closeNav = () => {
  const nav = document.querySelector('#nav');
  const overlay = document.querySelector('#overlay-nav');

  nav.style.width = 0;
  overlay.style.opacity = 0;

  // Wait for opacity transition to finish before removing height
  setTimeout(() => {overlay.style.height = 0}, 500)
}

export default openNav;
export { closeNav };
