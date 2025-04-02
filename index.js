document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");

    function updateCartCount() {
        cartCount.innerText = cart.length;
        updateCartItems();
    }

    function updateCartItems() {
        cartItems.innerHTML = ""; // Clear current items
        let total = 0;

        cart.forEach(product => {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${product.name} - Ksh ${product.price}`;
            cartItems.appendChild(cartItem);
            total += product.price; // Calculate total
        });

        document.getElementById("cart-total").innerText = total; // Update total
    }

    function addToCart(productId) {
        fetch("db.json")
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(p => p.id === productId);
                if (product) {
                    // Check if the product already exists in the cart
                    const productInCart = cart.find(p => p.id === productId);
                    if (!productInCart) {
                        cart.push(product);
                        alert(`${product.name} added to cart!`);
                        updateCartCount();
                    } else {
                        alert(`${product.name} is already in the cart.`);
                    }
                }
            })
            .catch(err => console.error('Error fetching products:', err));
    }

    // Load products and create buttons for adding to the cart
    const cardContainer = document.querySelector(".card-container");
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            let content = "";
            data.products.forEach(product => {
                content += `
                    <div class='product'>
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price} Ksh</p>
                        <button onclick='addToCart(${product.id})'>Add to Cart</button>
                    </div>
                `;
            });

            cardContainer.innerHTML = content; // Render products
        })
        .catch(err => console.error('Error loading products:', err));
});

console.log("Fetching products from db.json"); // Before fetch call
fetch("db.json")
    .then(response => {
        console.log("Response received:", response); // After fetching response
        return response.json();
    })
    .then(data => {
        console.log("Data retrieved:", data); // Check if data is correct
        // Your existing code to update product elements...
    })
    .catch(err => {
        console.error('Error fetching products:', err);
    });


