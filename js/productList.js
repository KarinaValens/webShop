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
                        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                        <p>Tshirts | Nike</p>
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

    // 4. Choose the parent
    const parent = document.querySelector("main");
    // 5. Append the data
    parent.appendChild(clone);
}