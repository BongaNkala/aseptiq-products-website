// AI Assistant - Elegant Blue Theme
let aiVisible = true;

const productsDatabase = {
    "aluminium": {
        name: "✨ Aluminium Polish/Wax",
        price: "R349.99",
        size: "1 Litre",
        response: "✨ ALUMINIUM POLISH/WAX - R349.99 (1 Litre)\n\n📝 How to use:\n• Clean surface thoroughly\n• Apply to soft cloth\n• Rub in circular motion\n• Buff to mirror shine\n\n🎯 Best for: Restoring faded aluminium windows, doors, and gates"
    },
    "glass": {
        name: "💎 Streak-Free Glass Cleaner",
        price: "R89.99",
        size: "500ml",
        response: "💎 GLASS CLEANER - R89.99 (500ml)\n\n📝 How to use:\n• Spray on glass surface\n• Wipe with microfiber cloth\n• Buff for streak-free finish\n\n🎯 Best for: Crystal clear windows and mirrors"
    },
    "grease": {
        name: "🔥 Industrial Degreaser",
        price: "R179.99",
        size: "1 Litre",
        response: "🔥 INDUSTRIAL DEGREASER - R179.99 (1 Litre)\n\n📝 How to use:\n• Apply directly to grease\n• Let sit for 2 minutes\n• Wipe clean with cloth\n\n🎯 Best for: Heavy grease on stoves, kitchens, and garage floors"
    }
};

function initAIAssistant() {
    if (document.getElementById('aiAssistantContainer')) return;
    
    const aiHTML = `
        <div id="aiAssistantContainer" class="ai-container">
            <div class="ai-toggle" onclick="toggleAI()">
                <span>🤖 AI Assistant</span>
                <span id="toggleArrow">▼</span>
            </div>
            <div id="aiContent" class="ai-content">
                <div class="ai-input-area">
                    <input type="text" id="aiInput" placeholder="Ask about aluminium, glass, grease..." onkeypress="handleAIKeypress(event)">
                    <button onclick="askAI()">Ask ✨</button>
                </div>
                <div class="ai-suggestions">
                    <span onclick="askSuggestion('aluminium')">✨ Aluminium</span>
                    <span onclick="askSuggestion('glass')">💎 Glass</span>
                    <span onclick="askSuggestion('grease')">🔥 Grease</span>
                    <span onclick="askSuggestion('where to buy')">📍 Store</span>
                    <span onclick="askSuggestion('prices')">💰 Prices</span>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', aiHTML);
}

function toggleAI() {
    const content = document.getElementById('aiContent');
    const arrow = document.getElementById('toggleArrow');
    aiVisible = !aiVisible;
    
    if (aiVisible) {
        content.style.display = 'flex';
        arrow.innerHTML = '▼';
    } else {
        content.style.display = 'none';
        arrow.innerHTML = '▲';
    }
}

function handleAIKeypress(event) {
    if (event.key === 'Enter') {
        askAI();
    }
}

function askSuggestion(question) {
    document.getElementById('aiInput').value = question;
    askAI();
}

function showMessage(msg) {
    const oldNotif = document.querySelector('.ai-message-popup');
    if (oldNotif) oldNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = 'ai-message-popup';
    notification.innerHTML = `<div class="message-content"><span class="msg-icon">💎</span><div class="msg-text">${msg.replace(/\n/g, '<br>')}</div></div>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 7000);
}

function askAI() {
    const input = document.getElementById('aiInput');
    const question = input.value.trim();
    
    if (!question) {
        showMessage('💡 Please ask me something!\n\nTry: "How to clean aluminium?" or "Where to buy?"');
        return;
    }
    
    showMessage(`📝 You asked: ${question}`);
    input.value = '';
    
    setTimeout(() => {
        const q = question.toLowerCase();
        let response = "";
        
        if (q.includes('aluminium') || q.includes('aluminum') || q.includes('faded')) {
            response = productsDatabase.aluminium.response;
        }
        else if (q.includes('glass') || q.includes('streak') || q.includes('window') || q.includes('mirror')) {
            response = productsDatabase.glass.response;
        }
        else if (q.includes('grease') || q.includes('degreaser') || q.includes('stove') || q.includes('oil')) {
            response = productsDatabase.grease.response;
        }
        else if (q.includes('where') || q.includes('buy') || q.includes('location') || q.includes('store') || q.includes('address')) {
            response = "📍 ASEPTIQ SHOWROOM\n\n🏪 Address: 88 Mmila Road, Soweto, 1868\n📞 Phone: +27 (0) 67 739 6525\n💬 WhatsApp: 087 938 6526\n✉️ Email: info@aseptiqproducts.co.za\n\n🚚 Free delivery on orders over R500!";
        }
        else if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('prices')) {
            response = "💰 ASEPTIQ PRICES\n\n✨ Aluminium Polish/Wax: R349.99 (1 Litre)\n💎 Glass Cleaner: R89.99 (500ml)\n🔥 Industrial Degreaser: R179.99 (1 Litre)\n🧹 Floor Cleaner: R129.99 (1 Litre)\n🚽 Bathroom Cleaner: R99.99 (750ml)\n🧴 Hand Sanitizer: R49.99 (500ml)\n\n💼 Bulk discounts available! Call us for pricing.";
        }
        else {
            response = "💎 How can I help you today?\n\nTry asking me:\n• 'aluminium' - for Aluminium Polish/Wax\n• 'glass' - for Glass Cleaner\n• 'grease' - for Degreaser\n• 'where to buy' - for store location\n• 'prices' - for all product prices\n\nI'm here to help with all your cleaning needs! ✨";
        }
        
        showMessage(response);
    }, 600);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}
