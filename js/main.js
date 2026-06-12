let cart = [];
let cartCount = 0;
let cartTotal = 0;

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

function updateCart() {
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal = cart.reduce((sum, item) => sum + item.total, 0);
    
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartTotal').textContent = `R${cartTotal.toFixed(2)}`;
    
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
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

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
