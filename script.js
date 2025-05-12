const cart = []; // Initialize the cart as an empty array

// Update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceSpan = document.getElementById('total-price');
    cartItemsDiv.innerHTML = ''; // Clear the cart items list
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>KES ${item.price.toFixed(2)}</span>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    cartCount.textContent = cart.length;
    totalPriceSpan.textContent = totalPrice.toFixed(2);

    // Add event listeners for the "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            removeFromCart(index); // Call remove function
        });
    });
}

// Add product to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.id;
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);

        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart(); // Update the cart display
    });
});

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    updateCart(); // Update the cart display
}

// Checkout button
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
    }
});

