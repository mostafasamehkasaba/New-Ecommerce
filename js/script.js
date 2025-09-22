let cart = document.getElementById("cart");
cart.addEventListener("click",()=>{
    window.location.href = "cart.html"; 
})




// const obj = {
//     id : 1,
//     img:""
//     productName:"homos",
//     cat: "men",
//     price:"20$",

// }

// let product = document.getElementById("product");
// let newProduct = document.createElement("div");

// newProduct.appendChild(product);
// newProduct.className("row");
// newProduct.innerHTML

var mostafa =document.createElement("div");

let ul =document.createElement("ul");
let li = document.createElement("li");
li.innerHTML = "home";
ul.appendChild(li);
mostafa.appendChild(ul);
console.log(mostafa)