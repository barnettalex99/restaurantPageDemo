function createMenuItem(title, description, price) {
  // sets title
  const menuItem = document.createElement('div');
  menuItem.setAttribute('id', 'menu-item');
  let itemTitle = document.createElement('div');
  itemTitle.textContent = title;
  itemTitle.setAttribute('id', 'menu-item-title');
  menuItem.appendChild(itemTitle);
  // sets description
  let itemDesc = document.createElement('div');
  itemDesc.textContent = description;
  itemDesc.setAttribute('id', 'menu-item-desc');
  menuItem.appendChild(itemDesc);
  // sets price
  let itemPrice = document.createElement('div');
  itemPrice.textContent = price;
  itemPrice.setAttribute('id', 'menu-item-price');
  menuItem.appendChild(itemPrice);
  return menuItem;
}

function loadMenu() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  mainContent.setAttribute('id', 'menu-content');
  const menuItem1 = createMenuItem('Tentacle Salad', 'A blend of organic, hand-sawed tentacles in vinaigrette glaze.', '5');
  mainContent.appendChild(menuItem1);
  const menuItem2 = createMenuItem('Plasma Soup', 'Your favorite plasma with seasonal vegetables.', '4');
  mainContent.appendChild(menuItem2);
  const menuItem3 = createMenuItem('Pasta and Meatballs', 'Just like your grandmother used to make! A universal classic.', '15');
  mainContent.appendChild(menuItem3);
  const menuItem4 = createMenuItem('Alien Steak', 'Not of your species...probably.', '33');
  mainContent.appendChild(menuItem4);
  const menuItem5 = createMenuItem('Galaxy Cake', 'Funfetti cake topped with chocolate galatic goop.', '5');
  mainContent.appendChild(menuItem5);
  return mainContent;
}

export default loadMenu;
