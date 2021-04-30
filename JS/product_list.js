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
  console.log(products);
}
