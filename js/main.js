let newusername = document.getElementById('newusername');
let newpassword = document.getElementById('newpassword');
let newsubmit = document.getElementById('newsubmit');
function addUser() {
    if (newusername.value != '' || newpassword.value != '') {
        localStorage.setItem('newuser', newusername.value.toLowerCase());
        localStorage.setItem('newpassword', newpassword.value.toLowerCase());

        setTimeout(function () {

            window.location = "log-in.html";

        }, 1500);
    } else {
        alert('please fill the inputs');
    }
};


// login
let username = document.getElementById('username');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let usernamelog = localStorage.getItem('newuser');
let passwordlog = localStorage.getItem('newpassword');
let logoutbtn = document.getElementById('logout');

function verifyUser() {

    if (username.value.trim() === usernamelog && password.value.trim() === passwordlog) {

        setTimeout(() => {
            window.location = "index.html";
        }, 1500);

    } else {
        document.getElementById('warning-message').innerHTML = 'Username or Password is wrong. please try again';
        username.style.border = '1px solid red';
        password.style.border = '1px solid red';
    };
}

if (usernamelog !== null) {
    document.querySelector('.first-ul').style.display = 'none';
    document.querySelector('.second-ul').style.display = 'flex';
    document.getElementById('membername').innerHTML = usernamelog;
} else {
    document.querySelector('.first-ul').style.display = 'flex';
    document.querySelector('.second-ul').style.display = 'none';
    document.getElementById('membername').innerHTML = '';
}

logoutbtn.onclick = function () {
    localStorage.clear()
    setTimeout(() => {
        window.location = 'log-in.html';
    }, 1500)
}