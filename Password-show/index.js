
const password = document.getElementById('password');
const checkbox = document.getElementById('checkBox')

checkbox.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text';
        password.focus()
    }else{
        password.type = 'password';
        password.focus()
    }
})