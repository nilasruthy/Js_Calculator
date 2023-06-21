let calculation = '';


// console.log(button.value);
function displayCalculation(){
let display=document.querySelector('.js-calculation');
display.innerHTML=calculation;
}

function updateCalculation(value){
    calculation += value;

    displayCalculation();
}