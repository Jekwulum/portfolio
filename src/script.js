// nav
const menu = document.querySelector('.mobile-menu');
const icon = document.querySelector('.mobile-icon');

icon.addEventListener('click', () => menu.classList.toggle('hidden'));

// contact details
const sendEmail = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name, email, message);
};