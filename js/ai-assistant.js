// Enhanced AI Assistant for Aseptiq Products RSA
let aiVisible = false;  // Changed to false - closed by default

function initAIAssistant() {
    if (document.getElementById('aiAssistantContainer')) return;
    
    const aiHTML = `
        <div id="aiAssistantContainer" class="ai-container">
            <div class="ai-toggle" onclick="toggleAI()">
                <div class="toggle-left">
                    <span class="toggle-icon">🤖</span>
                    <span class="toggle-text">AI Assistant</span>
                </div>
                <span id="toggleArrow" class="toggle-arrow">▼</span>
            </div>
            <div id="aiContent" class="ai-content" style="display: none;">
                <div class="ai-input-area">
                    <div class="input-wrapper">
                        <span class="input-icon">🔍</span>
                        <input type="text" id="aiInput" placeholder="Ask about aluminium, glass, grease..." onkeypress="handleAIKeypress(event)">
                    </div>
                    <button onclick="askAI()">
                        <span>Ask</span>
                        <span class="button-icon">✨</span>
                    </button>
                </div>
                <div class="ai-suggestions">
                    <span onclick="askSuggestion('aluminium')">
                        <span class="suggestion-icon">✨</span>
                        <span>Aluminium</span>
                    </span>
                    <span onclick="askSuggestion('glass')">
                        <span class="suggestion-icon">💎</span>
                        <span>Glass</span>
                    </span>
                    <span onclick="askSuggestion('grease')">
                        <span class="suggestion-icon">🔥</span>
                        <span>Grease</span>
                    </span>
                    <span onclick="askSuggestion('where to buy')">
                        <span class="suggestion-icon">📍</span>
                        <span>Store</span>
                    </span>
                    <span onclick="askSuggestion('prices')">
                        <span class="suggestion-icon">💰</span>
                        <span>Prices</span>
                    </span>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', aiHTML);
    
    // Ensure arrow points down (closed state)
    const arrow = document.getElementById('toggleArrow');
    if (arrow) {
        arrow.style.transform = 'rotate(0deg)';
    }
}

function toggleAI() {
    const content = document.getElementById('aiContent');
    const arrow = document.getElementById('toggleArrow');
    aiVisible = !aiVisible;
    
    if (aiVisible) {
        content.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function handleAIKeypress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        askAI();
    }
}

function askSuggestion(question) {
    const input = document.getElementById('aiInput');
    input.value = question;
    input.style.borderColor = '#5BB5C9';
    setTimeout(() => {
        input.style.borderColor = 'rgba(91, 181, 201, 0.35)';
    }, 500);
    askAI();
}

function showMessage(msg, type = 'bot') {
    const existingNotif = document.querySelector('.ai-message-popup');
    if (existingNotif) existingNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = 'ai-message-popup';
    notification.innerHTML = `
        <div class="message-content ${type}">
            <span class="msg-icon">${type === 'user' ? '📝' : '💎'}</span>
            <div class="msg-text">${msg.replace(/\n/g, '<br>')}</div>
            <button class="msg-close" onclick="this.parentElement.parentElement.remove()">✕</button>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification && notification.parentElement) {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }
    }, 8000);
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'ai-message-popup typing-indicator';
    indicator.id = 'aiTypingIndicator';
    indicator.innerHTML = `
        <div class="message-content bot">
            <span class="msg-icon">🤖</span>
            <div class="msg-text">
                <span>Aseptiq AI is thinking</span>
                <span class="typing-dots">
                    <span>.</span><span>.</span><span>.</span>
                </span>
            </div>
        </div>
    `;
    document.body.appendChild(indicator);
}

function removeTypingIndicator() {
    const indicator = document.getElementById('aiTypingIndicator');
    if (indicator) indicator.remove();
}

function askAI() {
    const input = document.getElementById('aiInput');
    const question = input.value.trim();
    
    if (!question) {
        showMessage('💡 Please ask me something!\n\nTry: "How to clean aluminium?" or "Where to buy?"', 'bot');
        input.style.borderColor = '#ff6b6b';
        setTimeout(() => {
            input.style.borderColor = 'rgba(91, 181, 201, 0.35)';
        }, 1000);
        return;
    }
    
    showMessage(question, 'user');
    input.value = '';
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        const response = getAIResponse(question);
        showMessage(response, 'bot');
    }, 600);
}

function getAIResponse(question) {
    const q = question.toLowerCase();
    
    if (q.includes('aluminium') || q.includes('aluminum') || q.includes('faded')) {
        return `✨ ALUMINIUM POLISH/WAX\n\n📦 Sizes & Prices:\n• 1 Litre - R349.99\n• 500g - R174.99\n\n📝 How to use:\n• Clean surface thoroughly\n• Apply to soft cloth\n• Rub in circular motion\n• Buff to mirror shine\n\n🎯 Best for: Restoring faded aluminium windows, doors, and gates`;
    }
    if (q.includes('glass') || q.includes('streak') || q.includes('window')) {
        return `💎 GLASS CLEANER - R89.99 (500ml)\n\n📝 How to use:\n• Spray on glass surface\n• Wipe with microfiber cloth\n• Buff for streak-free finish\n\n🎯 Best for: Crystal clear windows and mirrors`;
    }
    if (q.includes('grease') || q.includes('degreaser') || q.includes('stove')) {
        return `🔥 INDUSTRIAL DEGREASER - R179.99 (1 Litre)\n\n📝 How to use:\n• Apply directly to grease\n• Let sit for 2 minutes\n• Wipe clean with cloth\n\n🎯 Best for: Heavy grease on stoves and kitchens`;
    }
    if (q.includes('where') || q.includes('buy') || q.includes('location') || q.includes('store')) {
        return `📍 ASEPTIQ SHOWROOM\n\n🏪 88 Mmila Road, Soweto, 1868\n📞 +27 (0) 67 739 6525\n💬 WhatsApp: 087 938 6526\n✉️ info@aseptiqproducts.co.za\n\n🚚 Free delivery on orders over R500!`;
    }
    if (q.includes('price') || q.includes('cost') || q.includes('prices')) {
        return `💰 ASEPTIQ PRICES\n\n✨ Aluminium Polish/Wax: R349.99 (1L) | R174.99 (500g)\n💎 Glass Cleaner: R89.99\n🔥 Degreaser: R179.99\n🧹 Floor Cleaner: R129.99\n🚽 Pine Gel: R79.99\n🧴 Hand Sanitizer: R49.99\n\n💼 Bulk discounts available!`;
    }
    
    return `💎 How can I help?\n\n✨ Try asking:\n• "Aluminium" - Sizes & prices\n• "Glass" - Glass cleaner\n• "Grease" - Degreaser\n• "Where to buy" - Store location\n• "Prices" - All products`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}

// Add Pine Gel to AI responses
if (q.includes('pine') || q.includes('multi-purpose') || q.includes('kennel')) {
    response = `🌲 PINE GEL MULTI-PURPOSE CLEANER - R79.99 (1kg)\n\n📝 Uses:\n• Baths and tiles\n• Floors (all types)\n• Kennels and pet areas\n\n✨ Features:\n• Kills 99.9% of germs\n• Eliminates bad smells\n• Leaves fresh pine scent\n\n📝 How to use: Dilute with water or apply directly. Wipe or rinse clean.`;
}

// Add Handy Clean to AI responses
if (q.includes('handy') || q.includes('handy clean') || q.includes('double strength')) {
    response = `🧼 HANDY CLEAN - R149.99 (1 Litre)\n\n✨ Features:\n• Double strength formula\n• Removes 99.9% of dirt\n• Brightening and whitening action\n• Fresh fragrance\n\n📝 Uses:\n• All surfaces including tiles, floors, and countertops\n• Perfect for daily cleaning\n\n📝 How to use: Dilute with water or apply directly. Wipe or rinse clean.`;
}

// Add Dish Washing Liquid to AI responses
if (q.includes('dish') || q.includes('washing liquid') || q.includes('lemon') || q.includes('dishes')) {
    response = `🍋 DISH WASHING LIQUID - R69.99 (1 Litre)\n\n✨ Features:\n• 100% Lemon formula\n• Cuts through tough grease\n• Leaves dishes sparkling clean\n• Fresh lemon scent\n\n📝 Ingredients:\n• SMS70\n• Flakes\n• Perfume & Colorants\n\n📝 How to use: Apply to sponge, wash dishes, rinse thoroughly.`;
}

// Add new product responses
if (q.includes('tile') || q.includes('floor')) {
    response = `🧹 TILE CLEANER - R99.99 (1 Litre)\n\n✨ Features:\n• Removes oil, grease, and fat\n• Tough on dirt\n• Safe for floors\n\n📝 How to use: Dilute as needed. Apply to tiles, let sit, then rinse.`;
}
else if (q.includes('furniture') || q.includes('car interior')) {
    response = `🪑 FURNITURE POLISH - R89.99\n\n✨ Features:\n• Instant effect\n• Clean technology\n• Perfect for car interiors and household furniture\n\n📝 How to use: Shake well. Spray 20cm from surface. Wipe with soft cloth.`;
}
else if (q.includes('wash') || q.includes('wax') || q.includes('car')) {
    response = `🚗 WASH & WAX - R129.99 (1 Litre)\n\n✨ Features:\n• Long-lasting shine\n• Restores paint color\n• Fast and easy to apply\n\n📝 How to use: Wash car as normal. Apply wax and buff to shine.`;
}
else if (q.includes('dashboard') || q.includes('dash') || q.includes('vinyl')) {
    response = `💺 DASHBOARD POLISH - R79.99 (500ml)\n\n✨ Features:\n• Renews, shines, and protects\n• Works on rubber, vinyl, leather, and plastic\n\n📝 How to use: Apply to soft cloth. Rub onto surface. Buff to shine.`;
}
else if (q.includes('window') || q.includes('glass')) {
    response = `🪟 WINDOW CLEANER - R69.99 (1 Litre)\n\n✨ Features:\n• Removes heavy dirt\n• Leaves no streaks\n\n📝 How to use: Use neat or dilute 1:10 with water. Apply with cloth or newspaper. Wipe dry.`;
}


// Add Premium Dish Washing Liquid to AI responses
if (q.includes('bio citrus') || (q.includes('dish') && q.includes('premium')) || q.includes('plant extract')) {
    response = `🍋 PREMIUM DISH WASHING LIQUID - BIO CITRUS - R79.99 (1 Litre)\n\n✨ Features:\n• Contains plant extracts\n• Fully biodegradable\n• Triple concentrate formula\n• Fresh citrus scent\n\n🌿 Eco-friendly and tough on grease\n\n📝 How to use: Apply a small amount to sponge, wash dishes, rinse thoroughly. A little goes a long way!`;
}
