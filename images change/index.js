
const mainImg = document.getElementById('mainImg');
const childImg = document.querySelector('.images');

let isSame = false;

// childImg.addEventListener('click', (event) => {
//     const src = event.target.src;
//     mainImg.src = src;
// });

childImg.addEventListener('mousemove', (event) => {
    const parentImg = mainImg.src              //aaaaaaaaaaaaa
    const childImg = event.target.src;         //bbbbbbbbbbbbb

    const sameToSame = (parentImg === childImg) //false

    if(isSame === sameToSame) mainImg.src = childImg;
});