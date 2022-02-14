const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get(`category`);
//console.log(urlParams.get(`category`));

const url = `https://kea-alt-del.dk/t7/api/products?limit=12&category=` + category;

//Step 1: fetch the data
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        productL(data);
    })

function productL(data) {
    //console.log(data);
    // look into the product list
    data.forEach(showProduct);
}

function showProduct(product) {
    // 1. Select the template
    const template = document.querySelector("#myTemplate").content;
    // 2. Make a clone (the true statement makes include the child elements)
    const clone = template.cloneNode(true);
    // 3. Change data
    console.log(product);
    clone.querySelector(".producType").textContent = `${product.articletype} | ${product.brandname}`;
    clone.querySelector("h3").textContent = `${product.productdisplayname}`;
    clone.querySelector(".category").textContent = `${product.category}`;
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    clone.querySelector("img").alt = `https://kea-alt-del.dk/t7/images/webp/1000/${product.displayname}.webp`;
    clone.querySelector(".price").textContent = `${product.price}`;
    clone.querySelector(".discounted p:last-child").textContent = `-${product.discount}%`;
    // loop into the products to determind wich has discount or is sold out to add classes
    if (product.soldout) {
        clone.querySelector("article").classList.add("soldOut");
    }
    if (product.discount) {
        clone.querySelector("article").classList.add("onSale");
        // calculating the discounted price
        clone.querySelector(".discounted p span").textContent = product.price - (product.price * (product.discount / 100));
    }
    //make the product page dinamic
    clone.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);
    // 4. Choose the parent
    const parent = document.querySelector("#container");
    // 5. Append the data
    parent.appendChild(clone);
}