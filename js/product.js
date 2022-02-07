const url = "https://kea-alt-del.dk/t7/api/products/2801";

// fetch the data
fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

//populate the page 
function showProduct(product) {
    console.log(product);
    document.querySelector(".categoryName").textContent = product.category;
    //<img src="../images/1163.jpg" alt="T-shirt">
    document.querySelector("img.productImage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.productImage").alt = `https://kea-alt-del.dk/t7/images/webp/1000/${product.displayname}.webp`;

}