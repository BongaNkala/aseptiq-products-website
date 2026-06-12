// Premium AI Assistant - Dark Glassy Style
const productsDatabase = {
    "aluminium": {
        name: "✨ Aluminium Polish/Wax",
        price: "R349.99",
        response: "✨ ALUMINIUM POLISH/WAX - R349.99 (1 Litre)\n\n📝 How to use:\n• Clean surface thoroughly\n• Apply to soft cloth\n• Rub in circular motion\n• Buff to mirror shine\n\n🎯 Best for: Restoring faded aluminium windows, doors, and gates"
    },
    "glass": {
        name: "💎 Streak-Free Glass Cleaner",
        price: "R89.99",
        response: "💎 GLASS CLEANER - R89.99 (500ml)\n\n📝 How to use:\n• Spray on glass surface\n• Wipe with microfiber cloth\n• Buff for streak-free finish\n\n🎯 Best for: Crystal clear windows and mirrors"
    },
    "grease": {
        name: "🔥 Industrial Degreaser",
        price: "R179.99",
        response: "🔥 INDUSTRIAL DEGREASER - R179.99 (1 Litre)\n\n📝 How to use:\n• Apply directly to grease\n• Let sit for 2 minutes\n• Wipe clean with cloth\n\n🎯 Best for: Heavy grease on stoves, kitchens, and garage floors"
    }
};

function initAIAssistant() {
    if (document.getElementById('quickQuestionBar')) return;
    
    const aiHTML = `
        <div class="quick-question-bar" id="quickQuestionBar">
            <div class="quick-question-container">
                <div class="quick-icon">🤖</div>
                <input type="text" id="quickQuestionInput" placeholder="Ask about: aluminium, glass, grease..." onkeypress="handleQuickQuestion(event)">
                <button onclick="sendQuickQuestion()" class="quick-send-btn">Ask AI ✨</button>
            </div>
            <div class="quick-suggestions">
                <span class="suggestion-chip" onclick="setQuickQuestion('aluminium')">✨ Aluminium Polish</span>
                <span class="suggestion-chip" onclick="setQuickQuestion('glass')">💎 Glass Cleaner</span>
                <span class="suggestion-chip" onclick="setQuickQuestion('grease')">🔥 Degreaser</span>
                <span class="suggestion-chip" onclick="setQuickQuestion('where to buy')">📍 Store Location</span>
                <span class="suggestion-chip" onclick="setQuickQuestion('prices')">💰 Prices</span>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', aiHTML);
}

function showNotification(msg) {
    const notification = document.createElement('div');
    notification.className = 'ai-notification';
    notification.innerHTML = `<div class="notification-content"><span class="notification-icon">🤖</span><div class="notification-message">${msg.replace(/\n/g, '<br>')}</div></div>`;
    document.body.appendChild(notification);
    setTimeout(() => { 
        notification.style.opacity = '0'; 
        setTimeout(() => notification.remove(), 300); 
    }, 8000);
}

function handleQuickQuestion(e) { 
    if (e.key === 'Enter') sendQuickQuestion(); 
}

function setQuickQuestion(q) { 
    document.getElementById('quickQuestionInput').value = q; 
    sendQuickQuestion(); 
}

function sendQuickQuestion() {
    const input = document.getElementById('quickQuestionInput');
    const msg = input.value.trim();
    if (!msg) return;
    
    showNotification(`📝 You asked: ${msg}`);
    input.value = '';
    
    setTimeout(() => {
        const q = msg.toLowerCase();
        let response = "";
        
        if (q.includes('aluminium') || q.includes('aluminum')) {
            response = productsDatabase.aluminium.response;
        }
        else if (q.includes('glass')) {
            response = productsDatabase.glass.response;
        }
        else if (q.includes('grease') || q.includes('degreaser')) {
            response = productsDatabase.grease.response;
        }
        else if (q.includes('where') || q.includes('buy') || q.includes('location') || q.includes('store')) {
            response = "📍 ASEPTIQ SHOWROOM\n\n🏪 Address: 88 Mmila Road, Soweto, 1868\n📞 Phone: +27 (0) 67 739 6525\n💬 WhatsApp: 087 938 6526\n✉️ Email: info@aseptiqproducts.co.za\n\n🚚 Free delivery on orders over R500!";
        }
        else if (q.includes('price') || q.includes('cost') || q.includes('how much')) {
            response = "💰 ASEPTIQ PRICES\n\n✨ Aluminium Polish/Wax: R349.99 (1 Litre)\n💎 Glass Cleaner: R89.99 (500ml)\n🔥 Industrial Degreaser: R179.99 (1 Litre)\n\n💼 Bulk discounts available! Call us for pricing.";
        }
        else {
            response = "💎 How can I help?\n\nTry asking:\n• 'aluminium' - for Aluminium Polish/Wax\n• 'glass' - for Glass Cleaner\n• 'grease' - for Degreaser\n• 'where to buy' - for store location\n• 'prices' - for product prices";
        }
        
        showNotification(response);
    }, 600);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}
