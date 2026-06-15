// Shopping Cart Functions
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Size variables for all products
let currentAluminiumPrice = 349.99;
let currentAluminiumSize = "1 Litre";

let currentOvenPrice = 129.99;
let currentOvenSize = "1 Litre";

let currentDegreaserPrice = 179.99;
let currentDegreaserSize = "1 Litre";

let currentPinePrice = 79.99;
let currentPineSize = "1kg";

let currentHandyPrice = 149.99;
let currentHandySize = "1 Litre";

let currentDishPrice = 69.99;
let currentDishSize = "1 Litre";

let currentTilePrice = 99.99;
let currentTileSize = "1 Litre";

let currentFurniturePrice = 89.99;
let currentFurnitureSize = "500ml";

let currentWashPrice = 129.99;
let currentWashSize = "1 Litre";

let currentDashboardPrice = 79.99;
let currentDashboardSize = "500ml";

let currentPremiumDishPrice = 79.99;
let currentPremiumDishSize = "1 Litre";

let currentWindowPrice = 69.99;
let currentWindowSize = "1 Litre";

// Aluminium size selection
function selectAluminiumSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('aluminiumPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentAluminiumPrice = price;
    currentAluminiumSize = size;
}

// Oven Cleaner size selection
function selectOvenSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('ovenPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentOvenPrice = price;
    currentOvenSize = size;
}

// Degreaser size selection
function selectDegreaserSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('degreaserPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDegreaserPrice = price;
    currentDegreaserSize = size;
}

// Pine Gel size selection
function selectPineSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('pinePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentPinePrice = price;
    currentPineSize = size;
}

// Handy Clean size selection
function selectHandySize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('handyPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentHandyPrice = price;
    currentHandySize = size;
}

// Dish size selection
function selectDishSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('dishPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDishPrice = price;
    currentDishSize = size;
}

// Tile size selection
function selectTileSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('tilePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentTilePrice = price;
    currentTileSize = size;
}

// Furniture size selection
function selectFurnitureSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('furniturePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentFurniturePrice = price;
    currentFurnitureSize = size;
}

// Wash size selection
function selectWashSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('washPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentWashPrice = price;
    currentWashSize = size;
}

// Dashboard size selection
function selectDashboardSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('dashboardPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDashboardPrice = price;
    currentDashboardSize = size;
}

// Premium Dish size selection
function selectPremiumDishSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('premiumDishPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentPremiumDishPrice = price;
    currentPremiumDishSize = size;
}

// Window size selection
function selectWindowSize(price, size, button) {
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('windowPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentWindowPrice = price;
    currentWindowSize = size;
}

// Add to cart functions
function addToCartWithSize(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeOven(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeDegreaser(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizePine(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeHandy(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeDish(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeTile(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeFurniture(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeWash(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeDashboard(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizePremiumDish(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

function addToCartWithSizeWindow(productName, price, size) {
    addToCart(`${productName} (${size})`, price);
}

// Original add to cart function
function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        cart.push({ name: productName, price: price, quantity: 1, total: price });
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
                    <div><strong>${item.name}</strong><br>R${item.price.toFixed(2)} x ${item.quantity}</div>
                    <div><strong>R${item.total.toFixed(2)}</strong>
                    <button onclick="removeFromCart('${item.name}')" style="margin-left: 10px; background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Remove</button></div>
                </div>`).join('');
        }
    }
}

function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
        showNotification(`${productName} removed from cart`);
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) { alert('Your cart is empty!'); return; }
    alert(`Thank you for your order!\nTotal: R${cartTotal.toFixed(2)}\n\nWe will contact you shortly with payment details.`);
    cart = [];
    updateCart();
    toggleCart();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `position: fixed; top: 20px; right: 20px; background: #1e5631; color: white; padding: 15px 20px; border-radius: 5px; z-index: 10000; animation: slideIn 0.3s ease-out;`;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.opacity = '0'; setTimeout(() => notification.remove(), 300); }, 3000);
}

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
style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);

console.log('Aseptiq Products RSA website loaded successfully!');

// Updated price selection functions with new prices and sold out handling

// Aluminium Polish/Wax
function selectAluminiumSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('aluminiumPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentAluminiumPrice = price;
    currentAluminiumSize = size;
}

// Oven Cleaner
function selectOvenSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('ovenPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentOvenPrice = price;
    currentOvenSize = size;
}

// Heavy Duty Degreaser
function selectDegreaserSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('degreaserPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDegreaserPrice = price;
    currentDegreaserSize = size;
}

// Pine Gel
function selectPineSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('pinePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentPinePrice = price;
    currentPineSize = size;
}

// Handy Clean
function selectHandySize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('handyPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentHandyPrice = price;
    currentHandySize = size;
}

// Dish Washing Liquid
function selectDishSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('dishPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDishPrice = price;
    currentDishSize = size;
}

// Tile Cleaner
function selectTileSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('tilePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentTilePrice = price;
    currentTileSize = size;
}

// Furniture Polish
function selectFurnitureSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('furniturePrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentFurniturePrice = price;
    currentFurnitureSize = size;
}

// Wash & Wax
function selectWashSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('washPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentWashPrice = price;
    currentWashSize = size;
}

// Dashboard Polish
function selectDashboardSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('dashboardPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentDashboardPrice = price;
    currentDashboardSize = size;
}

// Premium Dish Washing Liquid
function selectPremiumDishSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('premiumDishPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentPremiumDishPrice = price;
    currentPremiumDishSize = size;
}

// Window Cleaner
function selectWindowSize(price, size, button) {
    if (price === 'Sold Out') {
        alert('Sorry, this size is currently sold out. Please try another size.');
        return;
    }
    const parentCard = button.closest('.product-card');
    const allButtons = parentCard.querySelectorAll('.size-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const priceDiv = document.getElementById('windowPrice');
    if (priceDiv) priceDiv.innerHTML = `R${price.toFixed(2)}`;
    currentWindowPrice = price;
    currentWindowSize = size;
}
