// cart.js
let cart = []; // Array to hold cart items

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = ''; // Clear current cart display
    let total = 0; // Initialize total amount

    // Loop through the items in the cart to generate the display
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: Ksh ${item.price}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price; // Calculate total price
    });

    cartTotalDisplay.textContent = total; // Update total in the display
}

// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for "Add to Cart" buttons using event delegation
    document.querySelector('.categories').addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productElement = event.target.closest('.col-3'); // Get the closest product card
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseInt(productElement.dataset.price, 10); // Convert price to integer

            // Create product object and add it to the cart
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
            };

            cart.push(product); // Push the product into the cart
            updateCart(); // Update the cart display
        }
    });
});
