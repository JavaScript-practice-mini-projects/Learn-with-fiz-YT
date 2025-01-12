
const seeMore = document.getElementById('seeMore');
const seeMoreText = document.querySelector('.see-more-text');
const closeBtn = document.getElementById('closeBtn');

seeMore.addEventListener('click', () => {
    seeMoreText.style.opacity = '1';
    seeMoreText.style.visibility = 'visible';
})
closeBtn.addEventListener('click', () => {
    seeMoreText.style.opacity = '0';
    seeMoreText.style.visibility = 'hidden';
})