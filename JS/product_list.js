//all products: https://keafs-8b71.restdb.io/rest/silfen-products
//api-key: 602e39f15ad3610fb5bb62c6

const urlParams = new URLSearchParams(window.location.search);
const discount = urlParams.get("discount");
const newArrivals = urlParams.get("new_arrivals");
const topSellers = urlParams.get("top_sellers");

let urlAll = "https://keafs-8b71.restdb.io/rest/silfen-products";
let urlSale = `?q={"discount": {"$gt": 0}}`;
let urlNew = `?q={"new_arrivals": true}`;
let urlTop = `?q={"top_sellers": true}`;

if (discount) {
  console.log("get products on sale");
  urlAll = urlAll + urlSale;
}

if (newArrivals) {
  console.log("get new arrivals");
  urlAll = urlAll + urlNew;
}

if (topSellers) {
  console.log("get top sellers");
  urlAll = urlAll + urlTop;
}

fetch(urlAll, {
  method: "GET",
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(products) {
  //   console.log(products);
  //grab template
  const template = document.querySelector("#productTemplate").content;
  //clone
  products.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    //adjust stuff
    copy.querySelector("#img_01").src = product.img_01;
    copy.querySelector("#img_02").src = product.img_02;
    copy.querySelector(".productTitle").textContent = product.title;
    copy.querySelector(".productPrice span").textContent = product.price;
    if (product.discount) {
      copy.querySelector("article").classList.add("onSale");
      copy.querySelector(".discountPrice").classList.remove("hidden");
      copy.querySelector(".discountPrice span").textContent = Math.round(
        product.price * (1 - product.discount / 100)
      );
    }
    //append
    document.querySelector(".productList").appendChild(copy);
  });
}
