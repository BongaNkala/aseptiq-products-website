// Shopping Cart Functions
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Aluminium product size variables
let currentAluminiumPrice = 349.99;
let currentAluminiumSize = "1 Litre";

// Function to select aluminium size
function selectAluminiumSize(price, size, button) {
    // Remove active class from all size buttons
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update price display
    const priceDiv = document.getElementById('aluminiumPrice');
    if (priceDiv) {
        priceDiv.textContent = `R${price.toFixed(2)}`;
    }
    
    // Update global variables
    currentAluminiumPrice = price;
    currentAluminiumSize = size;
}

// Add to cart with size
function addToCartWithSize(productName, price, size) {
    const productWithSize = `${productName} (${size})`;
    addToCart(productWithSize, price);
}

// Original add to cart function
function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1,
            total: price
        });
    }
    
    updateCart();
    showNotification(`${productName} added to cart!`);
}

// Update cart display
function updateCart() {
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal = cart.reduce((sum, item) => sum + item.total, 0);
    
    const cartCountElement = document.getElementById('cartCount');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (cartCountElement) cartCountElement.textContent = cartCount;
    if (cartTotalElement) cartTotalElement.textContent = `R${cartTotal.toFixed(2)}`;
    
    const cartItemsElement = document.getElementById('cartItems');
    if (cartItemsElement) {
        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p style="text-align: center;">Your cart is empty</p>';
        } else {
            cartItemsElement.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong><br>
                        R${item.price.toFixed(2)} x ${item.quantity}
                    </div>
                    <div>
                        <strong>R${item.total.toFixed(2)}</strong>
                        <button onclick="removeFromCart('${item.name}')" style="margin-left: 10px; background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Remove from cart
function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
        showNotification(`${productName} removed from cart`);
    }
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

// Place order
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert(`Thank you for your order!\nTotal: R${cartTotal.toFixed(2)}\n\nWe will contact you shortly with payment details.`);
    cart = [];
    updateCart();
    toggleCart();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1e5631;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

console.log('Aseptiq Products RSA website loaded successfully!');

// Updated function to handle size selection with separate price display
function selectAluminiumSize(price, size, button) {
    // Remove active class from all size buttons
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update price display (separate from size button)
    const priceDiv = document.getElementById('aluminiumPrice');
    if (priceDiv) {
        priceDiv.textContent = `R${price.toFixed(2)}`;
    }
    
    // Update global variables
    currentAluminiumPrice = price;
    currentAluminiumSize = size;
    
    // Optional: Show feedback
    showNotification(`Size changed to ${size} - R${price.toFixed(2)}`);
}

// Fix for size selection - update price display
function selectAluminiumSize(price, size, button) {
    // Remove active class from all size buttons
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update the price display
    const priceElement = document.getElementById('aluminiumPrice');
    if (priceElement) {
        priceElement.innerHTML = `R${price.toFixed(2)}`;
    }
    
    // Store current selection for add to cart
    window.currentAluminiumPrice = price;
    window.currentAluminiumSize = size;
    
    // Show feedback
    if (typeof showNotification === 'function') {
        showNotification(`✓ ${size} selected - R${price.toFixed(2)}`);
    }
}

// Make sure variables are initialized
if (typeof window.currentAluminiumPrice === 'undefined') {
    window.currentAluminiumPrice = 349.99;
    window.currentAluminiumSize = '1 Litre';
}

// Size variables for all products
let currentProductSizes = {};

// Generic function to handle size selection for any product
function selectProductSize(productId, price, size, button, originalPriceId) {
    // Remove active class from all size buttons for this product
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update price display
    const priceDiv = parentCard.querySelector('.price');
    if (priceDiv) {
        priceDiv.innerHTML = `R${price.toFixed(2)}`;
    }
    
    // Store current selection
    currentProductSizes[productId] = { price: price, size: size };
}

// Modified add to cart that checks for size
function addToCartWithSizeCheck(productName, basePrice, productId) {
    let finalPrice = basePrice;
    let sizeSuffix = "";
    
    if (currentProductSizes[productId]) {
        finalPrice = currentProductSizes[productId].price;
        sizeSuffix = ` (${currentProductSizes[productId].size})`;
    }
    
    addToCart(`${productName}${sizeSuffix}`, finalPrice);
}
