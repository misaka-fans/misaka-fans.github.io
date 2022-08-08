const initScroll = () => {
  const root= document.querySelector('.marquee');
  if (!root) return;
  const ul = root.querySelector('ul');
  ul.innerHTML += ul.innerHTML;
}
const initSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  const toggler = document.querySelector('.sidebar-toggler');
  const handleClick = (e) => {
    document.body.classList.toggle('sidebar-opened');
    toggler.textContent = document.body.classList.contains('sidebar-opened') ? 'menu_open' : 'menu';
  }
  toggler.addEventListener('click', handleClick);
}
const initBTT = () => {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;
  const handleClick = (e) => {
    window.scrollTo(0, 0);
  }
  btt.addEventListener('click', handleClick);
}

/**
 * @author: huge-pancake
 */
const init = () => {
  initScroll();
  initSidebar();
  initBTT();
}

addEventListener('DOMContentLoaded', init);