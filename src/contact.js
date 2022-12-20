function loadContact() {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');
  mainContent.setAttribute('id', 'contact-content');
  const phone = document.createElement('p');
  phone.textContent = '555-555-5555';
  mainContent.appendChild(phone);
  const email = document.createElement('p');
  email.textContent = 'spacegrub@gmail.com';
  mainContent.appendChild(email);
  const address = document.createElement('p');
  address.textContent = '123 Main St, Mars';
  mainContent.appendChild(address);
  return mainContent;
}

export default loadContact;
