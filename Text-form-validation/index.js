
const form = document.querySelector('form');
const bangla = document.getElementById('banglaInput');
const english = document.getElementById('englishInput');
let isCorrect = false;

bangla.addEventListener('input', (e) => { 
    errorDisplay(bangla);
});
english.addEventListener('input', () => {
    errorDisplay(english);
});


function numberValidation(num){
    const regex = /^\d+$/;
    return regex.test(num);
};

function errorDisplay(Element){
    const value = Element.value;
    const valueTrue = numberValidation(value);

    if(valueTrue && value > 0 && value < 101){
        Element.style.border = '1px solid gray';
        isCorrect = true;
    }else{
        Element.style.border = '2px solid red';
        isCorrect = false
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(isCorrect){
        document.getElementById('total').textContent = Number(bangla.value) + Number(english.value)
    }
})