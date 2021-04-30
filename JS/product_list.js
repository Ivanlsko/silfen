fetch("https://keafs-8b71.restdb.io/rest/silfen-products", {
  method: "GET",
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showAllProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showAllProducts(products) {
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
