const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');
const id = document.querySelector('.id');


const url = 'https://api.adviceslip.com/advice';

var text,adviceID;
const getAdvice = () =>
{ 
    fetch(url).then(response => response.json()).then(data =>
    { 
         text = data.slip.advice;
        adviceID = data.slip.id;
        id.textContent = adviceID;
        advice.textContent = text;

       

    });
    
}

dice.addEventListener('click', getAdvice);

setInterval(getAdvice, 10000);