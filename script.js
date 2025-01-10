async function loadRates(baseCurrency) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/4ec6280b69e5b33f98212f13/latest/${baseCurrency}`);	
    const data = await response.json();
  
    return data;
}

let swap = document.getElementById('swap');
let currencyOne = document.getElementById('amount-one');
let currencyTwo = document.getElementById('amount-two');
let currencyOneType = document.getElementById('currency-one');
let currencyTwoType = document.getElementById('currency-two');

let rates;
function updateRates() {
    let baseCurrency = currencyOneType.value;
    loadRates(baseCurrency).then(data => {
        rates = data;
    });
    console.log(rates); // Test purposes
}

updateRates();

currencyOneType.addEventListener('change', updateRates);

swap.addEventListener('click', () => {
    currencyTwo.value = currencyOne.value * rates.conversion_rates[currencyTwoType.value];
});
