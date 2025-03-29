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
        {
            "id": 3,
            "name": "Hp ProBook 440 G11 Intel Core Ultra 7 155U vPro Technology 16GB RAM 512GB SSD 14\" WUXGA Display",
            "description": "The HP ProBook 440 G11 is a powerful and reliable business laptop, designed to meet the demands of professionals, students, and business users. With its Intel Core Ultra 7 155U processor with vPro Technology, 16GB RAM, and 512GB SSD, this laptop delivers exceptional performance, efficiency, and security. Its sleek design, sturdy build quality, and advanced features make it a great choice for modern professionals who need a balance of power, portability, and security.",
            "price": 97999,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FHp%2520ProBook%2520440%2520G11%2520Intel%2520Core%2520Ultra%25207%2520155U%2520vPro%2520Technology%252016GB%2520RAM%2520512GB%2520SSD.jpg&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
          },
          {
            "id": 4,
            "name": "Lenovo IdeaPad Slim 3 14IrH8 13th Gen Intel Core i5-13420H 16GB RAM 512GB SSD 14\" FHD Display",
            "description": "Order Lenovo IdeaPad Slim 3 14IrH8 13th Gen Intel Core i5-13420H 16GB RAM 512GB SSD 14\" FHD Display Integrated Graphics Brand New 1 Year Dealership Warranty today, and have it delivered to your doorstep within 1-3 working days or same-day delivery within Nairobi.",
            "price": 62999,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FLenovo%2520IdeaPad%2520Slim%25203%252014IrH8%252013th%2520Gen%2520Intel%2520Core%2520i5-13420H%252016GB%2520RAM%2520512GB%2520SSD%252014%2522%2520FHD%2520Display%2520Integrated%2520Graphics%2520Brand%2520New%25201%2520Year%2520Dealership%2520Warranty.jpg&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
          },
          {
            "id": 5,
            "name": "Apple MacBook Air Intel Core i7 @ 2.2GHz 8GB RAM 128GB SSD 13.3\" Display",
            "description": "Order Apple MacBook Air Intel Core i7 @ 2.2GHz 8GB RAM 128GB SSD 13.3\" Display Backlit Keyboard A1466 BTO/CTO Early 2017 Ex Uk 6 Months Warranty Grade A Silver today, and have it delivered to your doorstep within 1-3 working days or same-day delivery within Nairobi.",
            "price": 27999,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FApple%2520MacBook%2520Air%2520Intel%2520Core%2520i7%2520%2540%25202.2GHz%25208GB%2520RAM%2520256GB%2520SSD%252013.3%2522%2520Display%2520Backlit%2520Keyboard%2520A1466%2520BTO%253ACTO%2520Early%25202017%2520Ex%2520Uk%2520Grade%2520A%2520Silver.jpeg&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
          },
          {
            "id": 6,
            "name": "Apple Macbook Pro 8th Gen Intel Core i5 Quad-Core 16GB RAM 256GB SSD 13.3\" Retina Display With Touch Bar Mid 2018 A1989 Ex UK",
            "description": "Order Apple Macbook Pro 8th Gen Intel Core i5 Quad-Core 16GB RAM 256GB SSD 13.3\" Retina Display With Touch Bar Mid 2018 A1989 Ex UK 6 Months Warranty today, and have it delivered to your doorstep within 1-3 working days or same-day delivery within Nairobi.",
            "price": 39999,
            "discount": 10,
            "stock": 20,
            "image": "https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FApple%2520Macbook%2520Pro%2520a1989%25208th%2520Gen%2520Intel%2520Core%2520i7-8559U%2520%2540%25202.70GHz%25208GB%2520RAM%2520256GB%2520SSD.jpg&w=640&q=75",
            "contact_email": "info@hiltech.co.ke",
            "whatsapp": "0723467198",
            "phone": "0723467198",
            "address": "Nairobi, Street, Building, 1st Floor Room C"
          }
        ]
};

// Cart data (initially empty)
let cart = [];

// Update cart display
function updateCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Price: ksh ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="remove-from-cart" data-id="${item.id}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Initialize event listeners for add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productId = parseInt(event.target.closest('.product-details').getAttribute('data-id'));
    addToCart(productId);
  });
});

// Event listener for remove from cart
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-from-cart')) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    removeFromCart(productId);
  }
});

// Initialize cart
updateCart();