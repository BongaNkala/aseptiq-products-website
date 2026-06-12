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
        return `💰 ASEPTIQ PRICES\n\n✨ Aluminium Polish/Wax: R349.99 (1L) | R174.99 (500g)\n💎 Glass Cleaner: R89.99\n🔥 Degreaser: R179.99\n🧹 Floor Cleaner: R129.99\n🚽 Bathroom Cleaner: R99.99\n🧴 Hand Sanitizer: R49.99\n\n💼 Bulk discounts available!`;
    }
    
    return `💎 How can I help?\n\n✨ Try asking:\n• "Aluminium" - Sizes & prices\n• "Glass" - Glass cleaner\n• "Grease" - Degreaser\n• "Where to buy" - Store location\n• "Prices" - All products`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}
