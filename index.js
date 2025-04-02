document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        cartCount.innerText = cart.length;
    }

    function addToCart(productId) {
        fetch("products.json")
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(p => p.id === productId);
                if (product) {
                    cart.push(product);
                    updateCartCount();
                    alert(${productName} added to cart!);
                }
            });
    }

    if (document.getElementById("content").dataset.page === "products") {
        fetch("products.json")
            .then(response => response.json())
            .then(data => {
                let content = "<h3>Products</h3>";
                data.products.forEach(product => {
                    content += `
                        <div class='product'>
                            <h3>${product.name}</h3>
                            <p>${product.price}</p>
                            <button onclick='addToCart(${product.id})'>Add to Cart</button>
                            <a href='product.html?id=${product.id}'>View Details</a>
                        </div>
                    `;
                });
                document.getElementById("content").innerHTML = content;
            });
    }
});

