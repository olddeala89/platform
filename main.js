var sellCurrency = '';
var buyCurrency = '';
var sellSum = 0;
var buySum = 0;

let sellSelect = document.getElementById('sellSelect');
let buySelect = document.getElementById('buySelect');
let sellsum = document.getElementById('sellSum');
let sellcurrency = document.getElementById('sellCurrency');
let buysum = document.getElementById('buySum');
let buycurrency = document.getElementById('buyCurrency');

sellSelect.addEventListener('change', (event) => {
    let nowCurrency = event.target.value;
    sellcurrency.innerHTML = nowCurrency;
});

buySelect.addEventListener('change', (event) => {
    let nowCurrency = event.target.value;
    buycurrency.innerHTML = nowCurrency;
});

sellsum.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    buysum.style.pointerEvents = 'none';
    buysum.value = inputValue*2;
});

