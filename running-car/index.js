
const carStop = document.getElementById('stop');
const carStart = document.getElementById('start');
const carImg = document.querySelector('img');

let isCarRunning = false;

let carRunningCount = 0;

carStart.addEventListener('click', () => {


    if(isCarRunning === false){
        isCarRunning = true
        let carStating = setInterval(carRunning, 10);

        function carRunning(){
            carRunningCount ++
            carImg.style.marginLeft = carRunningCount + 'px';
    
            if(carRunningCount === 1000){
                clearInterval(carStating);
            }
        }
        carStop.addEventListener('click', () => {
            clearInterval(carStating);
            isCarRunning = false;
        })
    }

    
})

