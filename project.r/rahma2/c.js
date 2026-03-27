var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");

var imagesArr = [];
for (var i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}
var currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
        ")";
}

const offers = document.querySelector('.offers-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function slide(to) {
    const total = offers.children.length;
    index = (index + to + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
setInterval(() => slide(1), 5000);

var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");

var imagesArr = [];
for (var i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}
var currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
        ")";
}


for (var j = 0; j < imagesArr.length; j++) {
    (function (j) {
        imagesArr[j].addEventListener("click", function () {
            BoxContainer.style.display = "flex";
            currentIndex = j;
            showImage(currentIndex);
        });
    })(j);
}

BtnClose.addEventListener("click", function () {
    BoxContainer.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === imagesArr.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});


prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArr.length - 1;
    }
    showImage(currentIndex);
});

BoxContainer.addEventListener("click", function (event) {
    if (event.target === BoxContainer) {
        BoxContainer.style.display = "none";
    }
});


let menuItems = [
    {
        name: "LASAL CHEESE",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge7.jpg"
    },
    {
        name: "JUMBO CRAB SHRIMP",
        price: "$24.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge8.jpg"
    },
    {
        name: "KOKTAIL JUICE",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge9.jpg"
    },
    {
        name: "CAPO STEAK",
        price: "$30.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge5.jpg"
    },
    {
        name: "ORGANIC FRUIT SALAD",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge11.jpg"
    },
    {
        name: "CHEESE PIZZA",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge12.jpg"
    },

    {
        name: "KOFTA MEAT",
        price: "$40.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge13.jpg"
    },
    {
        name: "SPANISH PIES",
        price: "$34.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge14.jpg"
    },
    {
        name: "CHEESE TOST",
        price: "$16.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge15.jpg"
    },
    {
        name: "FRUIT SALAD",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge16.jpg"
    },
    {
        name: "CHICKEN SHAWARMA",
        price: "$25.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge17.jpg"
    },
    {
        name: "MEGA CHEESE PIZZA",
        price: "$33.00",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "./imge18.jpg"
    }
];

let menuContainer = document.getElementById("menuContainer");

function displayMenu() {
    menuContainer.innerHTML = "";

    menuItems.forEach(item => {
        menuContainer.innerHTML += `
      <div class="menu-item">
        <img src="${item.image}">
        <div class="menu-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>${item.price}</span>
        </div>
      </div>
    `;
    });
}

displayMenu();


function Form() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById(' lastname').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let country = document.getElementById('country').value;
    if (name === "" || lastname === "" || email === "" || mobile === "" || country === "") {
        alert("invalid");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("invalid email");
        return false;
    }
    return true;
}