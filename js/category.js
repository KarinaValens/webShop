const url = "https://kea-alt-del.dk/t7/api/categories";


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
    //name the categories
    catClone.querySelector(".categoryName").textContent = `${category.category}`;
    //past the link of categories 
    catClone.querySelector("a").setAttribute("href", `productlist.html?category=${category.category}`);

    // 4. Choose a parent
    const parent = document.querySelector("#container");
    // 5. Append the data
    parent.appendChild(catClone);
}