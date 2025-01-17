
const header = document.querySelector('h2');
const text = "I'm a Web developer"

let textIndex = 0;
setInterval( textChanger, 300);

function textChanger(){
    if(textIndex < text.length){
        header.textContent += text[textIndex];
        textIndex++
    }else{
        textIndex = 0;
        header.textContent = ''
    }
}