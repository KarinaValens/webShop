const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch the data
fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

//populate the page 
function showProduct(product) {
    console.log(product);
    document.querySelector(".categoryName").textContent = `${product.productdisplayname}`;
    document.querySelector(".producType").textContent = `${product.articletype} | ${product.brandname}`;
    document.querySelector(".color").textContent = `${product.basecolour}`;
    document.querySelector(".number").textContent = `${product.id}`;
    document.querySelector(".category").textContent = `${product.category}`;
    document.querySelector(".productImage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector(".productImage").alt = `https://kea-alt-del.dk/t7/images/webp/1000/${product.displayname}.webp`;

}