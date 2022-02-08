const url = "https://kea-alt-del.dk/t7/api/products"

//Step 1: fetch the data
fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        productL(data);
    })

function productL(data) {
    //console.log(data);
    // look into the product list
    data.forEach(showProduct);
} {
    /* <template id="myTemplate">
                    <article class="proImg soldOut">
                        <a href="./product.html"> <img src="../images/1163.jpg" alt="T-shirt"></a>
                        <p>Price: <span> 1595,-</span></p>
                        <a href="./product.html">Read More</a>
                        <div class="discounted">
                            <p>Now DKK 1560,-</p>
                            <p>-34%</p>
                        </div>
                    </article>
                </template> */
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
        clone.querySelector(".discounted p span").textContent = product.price - (product.price * (product.discount / 100));
    }

    // calculating the discounted price


    // 4. Choose the parent
    const parent = document.querySelector("#container");
    // 5. Append the data
    parent.appendChild(clone);
}