// Initialize cart array from localStorage or empty array if none exists
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners for all "Add to Cart" buttons
    setupAddToCartButtons();
    
    // Create cart dropdown menu
    createCartDropdown();
    
    // Update cart UI on page load
    updateCartUI();
});

// Setup event listeners for Add to Cart buttons
function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product container
            const productContainer = this.closest('div[id]');
            
            // Extract product information
            const productId = productContainer.id;
            const productName = productContainer.querySelector('.name').textContent;
            const productPrice = parseFloat(productContainer.querySelector('.price').textContent
                .replace('ksh', '').replace(',', '').trim());
            const productImage = productContainer.querySelector('.product-image').src;
            
            // Add item to cart
            addToCart(productId, productName, productPrice, productImage);
            
            // Show confirmation message
            showMessage('Product added to cart!');
        });
    });
}

// Function to add items to cart
function addToCart(productId, productName, price, image) {
    // Check if product is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Increase quantity if item exists
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    saveCart();
    
    // Update cart display
    updateCartUI();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart UI elements
function updateCartUI() {
    // Update cart count badge
    const cartCountElements = document.querySelectorAll('#cart-count');
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = itemCount;
    });
    
    // Update cart items list
    const cartItemsList = document.getElementById('cart-items');
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Ksh ${item.price.toLocaleString()}</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            `;
            cartItemsList.appendChild(cartItem);
        });
        
        // Add event listeners to the newly created buttons
        setupCartItemButtons();
    }
    
    // Update cart total
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = calculateTotal().toLocaleString();
    }
    
    // Show empty cart message if needed
    updateEmptyCartMessage();
}

// Setup event listeners for cart item buttons (quantity and remove)
function setupCartItemButtons() {
    // Quantity decrease buttons
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            decreaseQuantity(productId);
        });
    });
    
    // Quantity increase buttons
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            increaseQuantity(productId);
        });
    });
    
    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            removeFromCart(productId);
        });
    });
}

// Function to decrease item quantity
function decreaseQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            // Remove item if quantity reaches 0
            cart.splice(itemIndex, 1);
        }
        
        saveCart();
        updateCartUI();
    }
}

// Function to increase item quantity
function increaseQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartUI();
        showMessage('Item removed from cart');
    }
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Show empty cart message if needed
function updateEmptyCartMessage() {
    const cartItemsList = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        if (!emptyCartMessage) {
            const message = document.createElement('p');
            message.id = 'empty-cart-message';
            message.textContent = 'Your cart is empty';
            message.style.textAlign = 'center';
            message.style.padding = '10px';
            
            if (cartItemsList) {
                cartItemsList.parentNode.insertBefore(message, cartItemsList.nextSibling);
            }
        }
    } else if (emptyCartMessage) {
        emptyCartMessage.remove();
    }
}

// Create cart dropdown
function createCartDropdown() {
    // Find the existing cart div
    const cartDiv = document.querySelector('.cart');
    
    if (cartDiv) {
        // Style the cart div as a dropdown
        cartDiv.style.position = 'absolute';
        cartDiv.style.display = 'none';
        cartDiv.style.right = '0';
        cartDiv.style.top = '100%';
        cartDiv.style.backgroundColor = '#fff';
        cartDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        cartDiv.style.borderRadius = '5px';
        cartDiv.style.padding = '15px';
        cartDiv.style.zIndex = '1000';
        cartDiv.style.minWidth = '300px';
        cartDiv.style.maxHeight = '400px';
        cartDiv.style.overflowY = 'auto';
        
        // Add checkout button to cart
        const checkoutButton = document.createElement('button');
        checkoutButton.className = 'btn';
        checkoutButton.textContent = 'Checkout';
        checkoutButton.style.width = '100%';
        checkoutButton.style.marginTop = '10px';
        checkoutButton.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Proceeding to checkout...');
                // Here you would typically redirect to a checkout page
            } else {
                showMessage('Your cart is empty');
            }
        });
        cartDiv.appendChild(checkoutButton);
        
        // Create cart icon that toggles dropdown
        const cartIcon = document.createElement('div');
        cartIcon.className = 'cart-icon';
        cartIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-icon-count" id="cart-count">0</span>
        `;
        cartIcon.style.position = 'relative';
        cartIcon.style.cursor = 'pointer';
        cartIcon.style.marginLeft = '20px';
        
        // Get navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            // Add cart icon to navbar
            navbar.appendChild(cartIcon);
            
            // Setup toggle functionality for cart dropdown
            cartIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
            });
            
            // Close dropdown when clicking elsewhere
            document.addEventListener('click', function() {
                cartDiv.style.display = 'none';
            });
            
            // Prevent dropdown from closing when clicking inside it
            cartDiv.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}

// Show notification message
function showMessage(message) {
    // Create message element if it doesn't exist
    let messageElement = document.getElementById('notification-message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'notification-message';
        messageElement.style.position = 'fixed';
        messageElement.style.bottom = '20px';
        messageElement.style.right = '20px';
        messageElement.style.backgroundColor = '#4CAF50';
        messageElement.style.color = 'white';
        messageElement.style.padding = '10px 20px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.zIndex = '1000';
        messageElement.style.opacity = '0';
        messageElement.style.transition = 'opacity 0.3s ease';
        document.body.appendChild(messageElement);
    }
    
    // Set message and show
    messageElement.textContent = message;
    messageElement.style.opacity = '1';
    
    // Hide after 3 seconds
    setTimeout(() => {
        messageElement.style.opacity = '0';
    }, 3000);
}