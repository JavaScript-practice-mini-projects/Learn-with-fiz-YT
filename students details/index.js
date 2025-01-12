const form = document.querySelector('form');

form.addEventListener('submit', handleForm );


function handleForm(event){
    event.preventDefault()
    const child = event.target
    const name = child.fullName.value;
    const ID = child.IDName.value;
    const group = child.GroupName.value;
    const CGPA = child.CGPAName.value;

    if(name === '') return alert('Please Enter Your Name')
    else if(ID === '') return alert('Please Enter Your ID')
    else if(group === '') return alert('Please Enter Your Group')
    else if(CGPA === '') return alert('Please Enter Your CGPA')
    tableUpdate(name,ID, group, CGPA)
}

function tableUpdate(name,ID, group, CGPA){
    const student = [name,ID, group, CGPA];
    const table = document.querySelector('table');
    const tr = document.createElement('tr');

    student.forEach((details) => {
        const td = document.createElement('td');
        td.textContent = details;
        tr.appendChild(td);
    })
    table.appendChild(tr);
}