// Fetch data from JSON file or use the provided JSON object
const productsData = {
    "products": [
        {
            "id": 1,
            "name": "Lenovo ThinkPad E14 Gen 6 Intel Core Ultra 7 155H 16GB DDR5-5600 RAM 512GB PCIe NVMe SSD 14\"",
            "description": "Order Lenovo ThinkPad E14 Gen 6 Intel Core Ultra 7 155H 16GB DDR5-5600 RAM 512GB PCIe NVMe PCIe SSD 14\" Anti-Glare Full HD Display Bluetooth WiFi FHD Hybrid IR Camera Intel Iris Xe Graphics Audio by Harman Backlit Keyboard Brand New 1 Year Manufacturer Warranty today, and have it delivered to your doorstep within 1-3 working days or same-day delivery within Nairobi.",
            "price": 124000,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FLenovo%2520ThinkPad%2520E14%2520Gen%25204%252012th%2520Gen%2520Intel%2520Core%2520i5-1235U%25208GB%2520RAM%2520512GB%2520SSD.jpeg&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
        },
        {
            "id": 2,
            "name": "HP Victus 16-r0010nia Gaming Laptop 13th Gen Intel Core i7-13700H 16GB DDR5 5200 DIMM RAM 1TB PCIe Gen4 NVMe M.2 SSD 16.1\" FHD 144Hz",
            "description": "Order HP Victus 16-r0010nia Gaming Laptop 13th Generation Intel Core i7-13700H 16GB DDR5 5200 DIMM RAM 1TB PCIe Gen4 NVMe M.2 SSD 16.1\" FHD 144Hz 6GB GDDR6 NVIDIA GeForce RTX 3050 Laptop GPU Audio by B&O Dual Speakers Windows 11 Home today.",
            "price": 149999,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FVictus%2520Gaming%2520Laptop%252016-r0010nia.%252C%252C.png&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
        },
        
};

// DOM elements
const productContainer = document.querySelector('.Product-container');

// Function to render products dynamically
function renderProducts(products) {
    productContainer.innerHTML = ''; // Clear the container

    products.forEach(product => {
        // Calculate the discounted price
        const discountedPrice = product.price - (product.price * (product.discount / 100));
        
        // Create product card element
        const productCard = document.createElement('div');
        productCard.classList.add('Product-card');

        // Set the inner HTML for the product card
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-details" data-id="${product.id}">
                <h3 class="Product-title">${product.name}</h3>
                <p class="Product-description">${product.description}</p>
                <p class="price">Ksh ${discountedPrice.toLocaleString()}</p>
                <p class="discount">-${product.discount}%</p>
                <p class="stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">${product.stock > 0 ? `${product.stock} pcs` : 'Out of stock'}</p>
                <button class="add-to-cart" ${product.stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
            </div>
        `;

        // Append the product card to the container
        productContainer.appendChild(productCard);

        // Add event listener to "Add to Cart" button
        const addToCartButton = productCard.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            addToCart(product);
        });
    });
}

// Cart functionality

function updateCartUI() {
    const cartContainer = document.querySelector('.cart-container');
    const totalPriceElement = document.querySelector('.total-price');
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p>Ksh ${itemTotalPrice}</p>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);

        // Add event listener to remove button
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(item.id);
        });
    });

    // Update total price display
    totalPriceElement.innerHTML = `Total: Ksh ${totalPrice}`;

    // Enable or disable checkout button based on cart content
    const checkoutButton = document.querySelector('.checkout-btn');
    checkoutButton.disabled = cart.length === 0;
}

// Checkout form submission (just an example, you can use an API or integrate payment gateway here)
document.querySelector('.checkout-btn').addEventListener('click', () => {
    const userDetails = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
    };

    // Simulate sending the order
    alert(`Order placed! Name: ${userDetails.name}, Total: Ksh ${calculateTotal()}`);
    cart = []; // Clear cart after checkout
    localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
    updateCartUI();
});

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

