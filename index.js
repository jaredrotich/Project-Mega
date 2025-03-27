// Function to load products into the page
function loadProducts() {
    const productContainer = document.getElementById("Product-container");
  
    products.forEach(product => {
      productContainer.innerHTML += generateProductHTML(product);
    });
  }
  
  // Wait for the DOM to fully load before adding products
  document.addEventListener('DOMContentLoaded', loadProducts);
  