/* const urlParams = new URLSearchParams(window.location.search);
//in the URL grab id and store itÂ´s value in id
const id = urlParams.get("id");
console.log(id);

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".productname").textContent =
    product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".colour").textContent = product.basecolour;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
} */

/* const searchParams = new URLSearchParams(window.location.search);

const articleId = searchParams.get("article");

fetch(
  "https://kea21-867f.restdb.io/rest/posts/" +
    articleId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "602e37b75ad3610fb5bb62bc",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
  console.log(data.comments);
  document.querySelector(".title").textContent = data.title;
  document.querySelector("h2 span").textContent = data.username;
  document.querySelector("p").textContent = data.content;

  //data.comments is gonna be the array

  //grab the template content
  const template = document.querySelector(".commentTemplate").content;

  //loop theough data.comments
  data.comments.forEach((comment) => {
    console.log(comment);

    //create a clone
    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = comment.content;
    clone.querySelector("p").textContent = comment.username;
    document.querySelector(".commentList").appendChild(clone);
  });
  if (data.comments.length == 0) {
    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = "No comments yet, say something!";
    clone.querySelector("p").textContent = "";
    document.querySelector(".commentList").appendChild(clone);
  }
}

const form = document.querySelector("#commentForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    username: form.elements.username.value,
    email: form.elements.email.value,
    content: form.elements.content.value,
    date: Date.now(),
  };
  console.log(payload);
  fetch(`https://kea21-867f.restdb.io/rest/posts/${articleId}/comments`, {
    method: "POST",
    headers: {
      "x-apikey": "602e37b75ad3610fb5bb62bc",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      const template = document.querySelector(".commentTemplate").content;
      const clone = template.cloneNode(true);
      clone.querySelector("h3").textContent = data.content;
      clone.querySelector("p").textContent = data.username;
      document.querySelector(".commentList").appendChild(clone);
    });
} */

//all products: https://keafs-8b71.restdb.io/rest/silfen-products
//api-key: 602e39f15ad3610fb5bb62c6

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

fetch("https://keafs-8b71.restdb.io/rest/silfen-products/" + productId, {
  method: "GET",
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProduct(product) {
  console.log(product);
  //populate
  document.querySelector(".productTitle").textContent = product.title;
  document.querySelector(".description p").textContent = product.description;
}
