document.addEventListener("DOMContentLoaded", function () {
    const cart = []; // Initialize the cart array
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    const updateCart = () => {
        // Clear existing cart items
        cartItemsContainer.innerHTML = "";
        
        // Calculate total price
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Ksh ${item.price}`;
            cartItemsContainer.appendChild(li);
            total += item.price; // Sum up product prices
        });

        cartTotalElement.textContent = total; // Update cart total display
    };

    const categoriesContainer = document.querySelector('.categories');
    if (categoriesContainer) {
        categoriesContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('add-to-cart')) {
                const productElement = event.target.closest('.col-3');
                if (productElement) {
                    // Extract information 
                    const productId = productElement.dataset.id;
                    const productName = productElement.querySelector('h3').textContent; // Get name from the h3 tag
                    const productPrice = parseInt(productElement.dataset.price, 10);

                    if (!isNaN(productPrice)) {
                        // Add to cart
                        cart.push({ id: productId, name: productName, price: productPrice });
                        updateCart();
                    } else {
                        console.error("Invalid product price:", productElement.dataset.price);
                    }
                }
            }
        });
    } else {
        console.warn("Categories container not found.");
    }
});