function loadHome() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  mainContent.setAttribute('id', 'home-content');
  const aboutParagraph = document.createElement('p');
  aboutParagraph.textContent = 'With delicious delicacies from all corners of the galaxy and out of this world flavors, Space Grub has something for every extra terrestial.';
  mainContent.appendChild(aboutParagraph);
  return mainContent;
}

export default loadHome;
