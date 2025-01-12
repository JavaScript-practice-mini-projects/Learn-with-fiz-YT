
let count = 0;
let count2 = 0;
let count3 = 0;

let projectCount = setInterval(ProjectCounter, 5);

function ProjectCounter() {
    count ++
    document.getElementById('project').textContent = count;
    if(count === 200) clearInterval(projectCount);
}

let clintCount = setInterval(clintCounter, 5);

function clintCounter(){
    count2 ++
    document.getElementById('clint').textContent = count2;
    if(count2 === 150) clearInterval(clintCount);
}

let archiveCount = setInterval(archiveCounter, 5);

function archiveCounter(){
    count3 ++
    document.getElementById('archive').textContent = count3;
    if(count3 === 100) clearInterval(archiveCount);
}