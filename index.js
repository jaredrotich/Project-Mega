//Array to hold cart items
let cart = ["Home", "Cart", "Login"];

//function to add items to the cart
function addToCart(productId, productName) {
    //create a product object
    const product = {id: productId, name: productName };

    //add product to the cart array
    cart.push(product);

    //allert the user that the product was added
    alert(`${productName} has been added to your cart!`);

    //log the cart to the console for now
    console.log(cart);
}