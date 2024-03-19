/* Click event handler for main button. */

document.getElementById('main-action-btn').onclick = function () {
  document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
};

/* Click event handler for menu links. */

let links = document.querySelectorAll('.menu-item > a');

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}

/* Click event handler for ordering buttons. */

const orderButtons = document.getElementsByClassName('product-card-btn');

for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

/* Form validation. */

document.getElementById('order-btn').onclick = function (event) {
  let hasEmptyField = false;
  const fields = [
    document.getElementById('burger'),
    document.getElementById('name'),
    document.getElementById('tel'),
  ];

  fields.forEach((field) => {
    field.parentElement.style.background = field.value ? '' : 'red';
    hasEmptyField = hasEmptyField || !field.value;
  });

  event.preventDefault();
  if (!hasEmptyField) {
    fields.forEach((field) => {
      field.value = '';
    });
    alert('Спасибо за заказ!');
  }
};

//* Currency switcher. */

const currency = document.getElementById('currency');
const prices = document.getElementsByClassName('price');

currency.onclick = function (e) {
  const currentCurrency = e.target.innerText;

  let newCurrency = '$';
  let coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 95.5;
  } else if (currentCurrency === '₽') {
    newCurrency = '€';
    coefficient = 0.85;
  } else if (currentCurrency === '€') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (const price of prices) {
    price.innerText =
      (price.getAttribute('data-base-price') * coefficient).toFixed(0) + ' ' + newCurrency;
  }
};
