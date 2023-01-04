window.addEventListener("DOMContentLoaded", (_) => {
  enableNavigation();
});

function enableNavigation() {
  const navButton = document.querySelector("#nav-button");
  const navMenuList = document.querySelector("#nav-menu-list");

  navButton.innerHTML = menuIcon;
  navButton.onclick = toggleIsShown;
  navMenuList.onclick = toggleIsShown;

  function toggleIsShown() {
    navMenuList.classList.toggle("show");

    const menuIsExpanded = navMenuList.classList.contains("show");

    if (menuIsExpanded) {
      navButton.innerHTML = closeIcon;
    } else {
      navButton.innerHTML = menuIcon;
    }
  }
}

const menuIcon = `
  <svg
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 6h16M4 12h16M4 18h16"
  ></path>
  </svg>
`;

const closeIcon = `
  <svg
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
    fill-rule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clip-rule="evenodd"
  ></path>
  </svg>
`;
