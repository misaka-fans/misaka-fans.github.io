const initScroll = () => {
  const root= document.querySelector('.marquee');
  const ul = root.querySelector('ul');
  ul.innerHTML += ul.innerHTML;
}
const initSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  const toggler = document.querySelector('.sidebar-toggler');
  const handleClick = (e) => {
    document.body.classList.toggle('sidebar-opened');
    toggler.textContent = document.body.classList.contains('sidebar-opened') ? 'menu_open' : 'menu';
  }
  toggler.addEventListener('click', handleClick);
}

const init = () => {
  initScroll();
  initSidebar();
}

addEventListener('DOMContentLoaded', init);