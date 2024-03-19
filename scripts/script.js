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

/* Currency switcher. */

const currency = document.getElementById('currency');
const prices = document.getElementsByClassName('price');
const usdToRubExchangeRate = 91.5;
const bynToRubExchangeRate = 29;

currency.onclick = function (e) {
  const currentCurrency = e.target.innerText;

  const isUSD = currentCurrency === '$';
  const isBYN = currentCurrency === 'BYN';
  const newCurrency = isUSD ? '₽' : isBYN ? '$' : 'BYN';

  e.target.innerText = newCurrency;

  Array.from(prices).forEach((priceEl) => {
    let number = parseFloat(priceEl.innerText.replace('$', '').replace('₽', '').replace('BYN', ''));

    if (isUSD) {
      number = (number * usdToRubExchangeRate).toFixed(0);
      priceEl.innerText = `${number} ₽`;
    } else if (isBYN) {
      number = ((number * bynToRubExchangeRate) / usdToRubExchangeRate).toFixed(0);
      priceEl.innerText = `${number} $`;
    } else {
      number = (number / bynToRubExchangeRate).toFixed(0);
      priceEl.innerText = `${number} BYN`;
      s;
    }
  });
};
