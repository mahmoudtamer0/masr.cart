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

// main page
// cart moving

let productsDOM = document.querySelector('.products-items');
let itemsChoosed = document.querySelector('.items-choosed');
let products = [
    {
        id: 1,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'camera',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 5000,
        itemSize: 'Large',
    },
    {
        id: 2,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'headphone sodo sd-1004',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 1500,
        itemSize: 'Large',
    },
    {
        id: 3,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'makeup',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 500,
        itemSize: 'Small'
    },
    {
        id: 4,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'Rader',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 2000,
        itemSize: 'Large'
    },
    {
        id: 5,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'camera pro',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 8000,
        itemSize: 'Large'
    },
    {
        id: 6,
        imgsrcUrl: 'images/download.jpeg',
        itemTitle: 'headphone sodo sd-1007',
        itemDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        itemPrice: 9000,
        itemSize: 'Large'
    }
];

function drawingUiProducts() {
    let productsUI = products.map((item) => {
        return `
                    <div class="item col-lg-4">
                        <div class="item-img">
                            <img src="${item.imgsrcUrl}" alt="">
                        </div>
                        <div class="item-description">
                            <h2>${item.itemTitle}</h2>
                            <p>${item.itemDescription}</p>
                            <span>Size: ${item.itemSize}</span>
                            <span>Price: ${item.itemPrice}</span>
                            <div class="item-add">
                                <button onclick="addedtocart(${item.id})">Add to cart</button>
                            </div>
                        </div>
                    </div>
        `
    })
    productsDOM.innerHTML = productsUI;
};
drawingUiProducts();

function addedtocart(id) {
    let choosenproduct = products.find((item) => item.id === id)
    itemsChoosed.innerHTML += `
    <div class="item-choosed">
            <div class="item-choosed-img"><img src="${choosenproduct.imgsrcUrl}" alt=""></div>
                <div class="item-choosed-disc">
                    <h1>${choosenproduct.itemTitle}</h1>
                    <p>${choosenproduct.itemDescription}</p>
                    <span>size : ${choosenproduct.itemSize}</span>
                    <span>price: ${choosenproduct.itemPrice}</span>
                </div>
    </div>

    `
    let itemsChoosedArray = Array.from(document.querySelectorAll('.items-choosed .item-choosed'));
    let cartCount = document.getElementById('cart-count').innerHTML = itemsChoosedArray.length;
    // let totalprice = document.getElementById('totalofcart').innerHTML += Number(choosenproduct.itemPrice);
}
// function checkedLoggedUser() {
//     if (username == null) {
//         window.location = 'log-in.html';
//     } else {
//         return 0;
//     }
// }
let theSection = document.querySelector('.the-section');
function cartXicon() {
    // theSection.classList.add('right')
    theSection.style.cssText = 'width:0;display:none;'
}
function carticontoright() {
    // theSection.classList.remove('right')
    theSection.style.cssText = 'width:30%;display:block;'
}