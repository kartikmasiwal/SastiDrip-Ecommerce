const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "HOODIE 001",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "./img/Hoodie-31.png",
      },
      {
        code: "black",
        img: "./img/Hoodie-21.png",
      },
    ],
  },
  {
    id: 2,
    title: "TSHIRT 001",
    price: 799,
    colors: [
      {
        code: "green",
        img: "./img/tshirt_1.png",
      },
      {
        code: "white",
        img: "./img/tshirt_2.png",
      },
    ],
  },
  {
    id: 3,
    title: "OVERSIZED-TSHIRT",
    price: 999,
    colors: [
      {
        code: "black",
        img: "img/oversized_tshirt_1.png",
      },
      {
        code: "white",
        img: "img/oversized_tshirt_2.png",
      },
    ],
  },
  {
    id: 4,
    title: "SWEATSHIRT",
    price: 1199,
    colors: [
      {
        code: "",
        img: "img/sweatshirt 1.png",
      },
      {
        code: "black",
        img: "img/sweatshirt2.png",
      },
    ],
  },
  {
    id: 5,
    title: "CAPS",
    price: 299,
    colors: [
      {
        code: "black",
        img: "img/cap01-.png",
      },
      {
        code: "green",
        img: "img/caps_2.png",
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
    currentProductPrice.textContent = "₹" + choosenProduct.price;
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
