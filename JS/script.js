//all products: https://keafs-8b71.restdb.io/rest/silfen-products
//api-key: 602e39f15ad3610fb5bb62c6

//New arrivals
let urlNew = `https://keafs-8b71.restdb.io/rest/silfen-products?q={"new_arrivals": true}&max=3`;
//Top sellers
let urlTop = `https://keafs-8b71.restdb.io/rest/silfen-products?q={"top_sellers": true}&max=3`;

fetch(urlNew, {
  method: "GET",
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showNew(response);
  })
  .catch((err) => {
    console.error(err);
  });
