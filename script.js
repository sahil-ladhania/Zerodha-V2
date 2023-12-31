// Targeting The DOM.
let form = document.querySelector('.form');
let capital = document.querySelector('.capital');
let years = document.querySelector('.years');
let portfolioReturn = document.querySelector('.portfolio-return');
let intrest = document.querySelector('.intrest');
let calculate = document.querySelector('.calculate');
let clear = document.querySelector('.clear');
// Logic For Calculating Portfolio Return.
calculate.addEventListener('click' , (e) => {
    e.preventDefault();
    const PR = Math.floor(capital.value * ((1 + intrest.value / 100)) ** years.value);
    console.log(`Your PR : ${PR} Rs`);
    portfolioReturn.innerHTML = `${PR}. Rs`;
    capital.value = '';
    years.value = '';
    intrest.value = '';
});
// Logic For Clearing The Portfolio Return.
clear.addEventListener('click' , (e) => {
    e.preventDefault();
    portfolioReturn.innerHTML = '';
})