const $form = document.querySelector('.contactform');
const $mail = document.querySelector('.email');
const $message = document.querySelector('.warnings');
const $closemenu = document.querySelector('.x-warning');
const $container = document.querySelector('.hide');

$form.addEventListener('submit', (e) => {
  const restriction = /[A-Z]/;

  if (restriction.test($mail.value)) {
    e.preventDefault();
    $message.innerHTML = 'Warning: Please use only lower case for email';
    $container.classList.remove('hide');
  } else {
    $container.classList.add('hide');
  }
});

$closemenu.addEventListener('click', () => {
  $container.classList.add('hide');
});