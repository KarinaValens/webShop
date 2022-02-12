const urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams.get(`category`));
const category = urlParams.get("category");
const url = "https://kea-alt-del.dk/t7/api/product?category=${category}";


/* fetch(url)
    .then((resp) => resp.json())
    .then((data) => showCategory(data)); */

fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.forEach(showCategory));

//populate the page
function showCategory(category) {
    console.log(category.category);
    // 1. Select template
    const catTemplate = document.querySelector("#categoryTemplate").content;
    // 2. Make a clone (the true stament in the clone make it include its children)
    const catClone = catTemplate.cloneNode(true);
    // 3. Change data
    catClone.querySelector(".categoryName").textContent = `${category.category}`
    // 4. Choose a parent
    const parent = document.querySelector("#container");
    // 5. Append the data
    parent.appendChild(catClone);
}