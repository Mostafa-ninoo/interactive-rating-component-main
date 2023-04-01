const submitButton = document.querySelector('#submit-btn');
const thanksMessage = document.querySelector('.second-div');
const mainDiv = document.querySelector('.main-div');
const choose = document.querySelector('#choose');
const numbers = document.querySelectorAll('.num');
const rating = document.querySelector('#rating');

submitButton.addEventListener('click', function () {
    thanksMessage.style.visibility = 'visible';
    mainDiv.style.visibility = 'hidden';
})

thanksMessage.addEventListener('click', () => {
    thanksMessage.style.visibility = 'hidden';
    mainDiv.style.visibility = 'visible';
})

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        rating.innerHTML = num.innerHTML;
    })
})