const img = document.querySelector('img');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');

onBtn.addEventListener('click', () => {
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
});
offBtn.addEventListener('click', () => {
    img.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
});
