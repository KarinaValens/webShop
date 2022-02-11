/* const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category"); */
const url = "https://kea-alt-del.dk/t7/api/categories";
console.log(url);

/* fetch(url)
    .then((resp) => resp.json())
    .then((data) => showCategory(data)); */

fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.forEach(showCategory));
//populate the page

function showCategory(category) {
    console.log(category.category);
    //document.querySelector(".productImage").textContent = `${category}`
}