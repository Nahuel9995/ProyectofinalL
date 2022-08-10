//const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const data = [
  {id: 1,
  title: "Air Force",
  price: 119,
  colors: [
    {
      code: "black",
      img: "./img/air.png",
    },
    {
      code: "darkblue",
      img: "./img/air2.png",
    },
  ],
},
{
  id: 2,
  title: "Air Jordan",
  price: 149,
  colors: [
    {
      code: "lightgray",
      img: "./img/jordan.png",
    },
    {
      code: "green",
      img: "./img/jordan2.png",
    },
  ],
},
{
  id: 3,
  title: "Blazer",
  price: 109,
  colors: [
    {
      code: "lightgray",
      img: "./img/blazer.png",
    },
    {
      code: "green",
      img: "./img/blazer2.png",
    },
  ],
},
{
  id: 4,
  title: "Crater",
  price: 129,
  colors: [
    {
      code: "black",
      img: "./img/crater.png",
    },
    {
      code: "lightgray",
      img: "./img/crater2.png",
    },
  ],
},
{
  id: 5,
  title: "Hippie",
  price: 99,
  colors: [
    {
      code: "gray",
      img: "./img/hippie.png",
    },
    {
      code: "black",
      img: "./img/hippie2.png",
    },
  ],
},
]

const wrapper = document.getElementById("catalogue")
data.forEach(element => {
  // create an item wrapper
  let item = document.createElement("div")
  item.innerHTML = element.name

  // create item price
  let itemPrice = document.createElement("div")
  itemPrice.innerHTML = `$${element.price} USD`
  item.appendChild(itemPrice)

  // create "Add to cart" button for each item
  let itemButton = document.createElement("button")
  itemButton.innerHTML = "Add to cart"

  // Add info to the button which we will when we want to safe it into Local Storage
  itemButton.dataset.name = element.name
  itemButton.dataset.price = element.price
  itemButton.classList.add("add-to-cart")
  item.appendChild(itemButton)

  // a line to separate the items
  item.appendChild(document.createElement("hr"))

  // insert item to the main wrapper
  wrapper.appendChild(item)
  return true
})

Array.from(document.getElementsByClassName("add-to-cart")).forEach(function (
  element
) {
  element.addEventListener("click", (e) => {
    // retrieve current cart if it exists. If it doesn't create an empty cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let newItem = {
      name: e.target.dataset.name,
      price: e.target.dataset.price,
    };
    cart.push(newItem);

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let overallPrice = 0;

if (cart.length) {
  // using the forEach method, calculate the total price of each item within our cart array
  cart.forEach((element) => {
    overallPrice += parseInt(element.price, 10);
  });
}
document.getElementById(
  "overall-price"
).innerHTML = `Overall Price: $${overallPrice} USD`;

// adds an event listener to clear our cart
document.getElementById("clear-cart").addEventListener("click", () => {
  localStorage.removeItem("cart");
  alert("Cart is cleared!");
});