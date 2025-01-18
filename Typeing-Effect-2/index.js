
const headerText = document.getElementById('blinkText');

const text = ["Web Developer", "Software Engineer", "Content Creator", "Freelancer" ];
let count = 0;
let currentText = '';
let index = 0;




function letterTyping(){

    currentText = text[count]
    
    if(index <= currentText.length -1 ){
        headerText.textContent += currentText[index]
        index ++
    }else{
        index = 0;
        count++
        headerText.textContent = ''
    }
    if(count >= text.length) count = 0

}
setInterval(letterTyping, 250)


// const headerText = document.getElementById('blinkText');

// const text = ["Web Developer", "Software Engineer", "Content Creator", "Freelancer"];
// let count = 0; // ট্র্যাক করে কোন শব্দে কাজ চলছে
// let currentText = '';
// let index = 0; // ট্র্যাক করে বর্তমান শব্দের অক্ষর

// function letterTyping() {
//     if (index < text[count].length) {
//         // অক্ষর যোগ করা
//         headerText.textContent += text[count][index];
//         index++;
//     } else {
//         // বর্তমান শব্দ শেষ হলে
//         index = 0; 
//         count++; 
//         headerText.textContent = ''; // টেক্সট মুছে ফেলা
//         if (count >= text.length) count = 0; // পুনরাবৃত্তি
//     }
// }

// // প্রতি 100ms এ ফাংশন কল
// setInterval(letterTyping, 250);
