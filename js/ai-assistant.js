// Premium AI Assistant for Aseptiq Products RSA
let assistantOpen = false;

// Product database
const productsDatabase = {
    "aluminium polish/wax": {
        name: "✨ Aluminium Polish/Wax",
        price: "R349.99",
        size: "1 Litre",
        description: "Premium formula for restoring faded aluminium surfaces",
        uses: ["Aluminium windows", "Kingdom doors", "Burglar bars", "Gates"],
        howToUse: "1. Clean surface thoroughly\n2. Apply small amount to soft cloth\n3. Rub in circular motion\n4. Buff with clean dry cloth for mirror shine",
        bestFor: "Restoring faded aluminium, removing oxidation, adding protective layer"
    },
    "glass cleaner": {
        name: "💎 Streak-Free Glass Cleaner",
        price: "R89.99",
        size: "500ml",
        uses: ["Windows", "Mirrors", "Glass tables"],
        howToUse: "1. Spray on surface\n2. Wipe with microfiber cloth\n3. Buff for crystal clear finish",
        bestFor: "Streak-free brilliance on all glass surfaces"
    },
    "floor cleaner": {
        name: "🪨 Heavy-Duty Floor Cleaner",
        price: "R129.99",
        size: "1 Litre",
        uses: ["Tiles", "Marble", "Hardwood", "Laminate"],
        howToUse: "1. Dilute 50ml per 5L water\n2. Mop floor\n3. No rinsing needed",
        bestFor: "Professional cleaning for all floor types"
    },
    "bathroom cleaner": {
        name: "🛁 Anti-Bacterial Bathroom Cleaner",
        price: "R99.99",
        size: "750ml",
        uses: ["Toilets", "Sinks", "Showers", "Tiles"],
        howToUse: "1. Spray on surface\n2. Wait 2-3 minutes\n3. Scrub and rinse",
        bestFor: "Removing limescale, soap scum, killing bacteria"
    },
    "degreaser": {
        name: "🔥 Industrial Degreaser",
        price: "R179.99",
        size: "1 Litre",
        uses: ["Kitchens", "Stoves", "Garages", "Engines"],
        howToUse: "1. Apply directly to grease\n2. Let sit 2 minutes\n3. Wipe or rinse",
        bestFor: "Heavy-duty grease and oil removal"
    },
    "sanitizer": {
        name: "🧴 Alcohol-Based Hand Sanitizer",
        price: "R49.99",
        size: "500ml",
        uses: ["Hands", "Surfaces", "High-touch areas"],
        howToUse: "1. Apply palm-sized amount\n2. Rub hands together\n3. Let air dry",
        bestFor: "Quick disinfection, 99.9% germ kill"
    }
};

function initAIAssistant() {
    const aiHTML = `
        <div id="aiAssistant" class="ai-assistant">
            <div class="ai-button" onclick="toggleAIAssistant()">
                🤖 <span class="ai-badge">AI</span>
            </div>
            <div id="aiWindow" class="ai-window">
                <div class="ai-header">
                    <h3>✨ Aseptiq AI Luxury Assistant ✨</h3>
                    <button onclick="toggleAIAssistant()" style="background:none; border:none; color:white; font-size:24px; cursor:pointer;">✕</button>
                </div>
                <div class="ai-messages" id="aiMessages">
                    <div class="ai-message bot">
                        👑 <strong>Welcome to Aseptiq Luxury Care</strong> 👑<br><br>
                        I'm your personal cleaning concierge. How may I assist you today?<br><br>
                        💎 <strong>Quick suggestions:</strong><br>
                        • "How do I restore faded aluminium?"<br>
                        • "Best product for glass streaks?"<br>
                        • "Remove tough kitchen grease"<br>
                        • "Where to buy your products?"<br>
                        • "Show me all premium products"
                    </div>
                </div>
                <div class="ai-input-area">
                    <input type="text" id="aiUserInput" placeholder="Ask me anything about our products... ✨" onkeypress="handleAIKeyPress(event)">
                    <button onclick="sendAIMessage()">Send 💎</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', aiHTML);
}

function toggleAIAssistant() {
    const window = document.getElementById('aiWindow');
    assistantOpen = !assistantOpen;
    window.classList.toggle('active');
}

function handleAIKeyPress(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function sendAIMessage() {
    const inputField = document.getElementById('aiUserInput');
    const userMessage = inputField.value.trim();
    
    if (!userMessage) return;
    
    addMessage(userMessage, 'user');
    inputField.value = '';
    
    showTypingIndicator();
    
    setTimeout(() => {
        const response = getAIResponse(userMessage);
        removeTypingIndicator();
        addMessage(response, 'bot');
    }, 600);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('aiMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('aiMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message bot typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '💎 Aseptiq AI is crafting your response<span>.</span><span>.</span><span>.</span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function getAIResponse(question) {
    const q = question.toLowerCase();
    
    if (q.includes('aluminium') || q.includes('faded')) {
        const p = productsDatabase["aluminium polish/wax"];
        return `✨ <strong>${p.name}</strong> - ${p.price}<br><br>
📦 Size: ${p.size}<br>
💎 ${p.description}<br><br>
<strong>📝 How to use:</strong><br>${p.howToUse}<br><br>
<strong>🎯 Perfect for:</strong> ${p.bestFor}<br><br>
📍 Available at our premium store or for delivery. Call +27 67 739 6525!`;
    }
    
    if (q.includes('glass') || q.includes('streak') || q.includes('window')) {
        const p = productsDatabase["glass cleaner"];
        return `💎 <strong>${p.name}</strong> - ${p.price}<br><br>
📦 Size: ${p.size}<br>
<strong>📝 How to use:</strong><br>${p.howToUse}<br><br>
<strong>✨ Result:</strong> Crystal clear, streak-free brilliance!`;
    }
    
    if (q.includes('grease') || q.includes('degreaser') || q.includes('stove')) {
        const p = productsDatabase.degreaser;
        return `🔥 <strong>${p.name}</strong> - ${p.price}<br><br>
📦 Size: ${p.size}<br>
<strong>⚡ Power:</strong> Industrial strength, cuts through toughest grease<br><br>
<strong>📝 How to use:</strong><br>${p.howToUse}`;
    }
    
    if (q.includes('where') || q.includes('buy') || q.includes('location')) {
        return `📍 <strong>Aseptiq Luxury Showroom</strong><br><br>
🏪 Address: 88 Mmila Road, Soweto, 1868<br>
📞 Phone: +27 (0) 67 739 6525<br>
💬 WhatsApp: 087 938 6526<br>
✉️ Email: info@aseptiqproducts.co.za<br><br>
🚚 <strong>Premium Delivery Service:</strong> Free delivery on orders over R500!`;
    }
    
    if (q.includes('price') || q.includes('cost')) {
        return `💰 <strong>Our Premium Collection Prices:</strong><br><br>
✨ Aluminium Polish/Wax: R349.99<br>
💎 Glass Cleaner: R89.99<br>
🪨 Floor Cleaner: R129.99<br>
🛁 Bathroom Cleaner: R99.99<br>
🔥 Industrial Degreaser: R179.99<br>
🧴 Hand Sanitizer: R49.99<br><br>
💼 <strong>Bulk discounts available!</strong> Contact us for corporate pricing.`;
    }
    
    return `💎 <strong>How may I assist you with your premium cleaning needs?</strong><br><br>
Try asking me:<br>
🔹 "How do I restore faded aluminium windows?"<br>
🔹 "Best product for streak-free glass?"<br>
🔹 "Remove tough kitchen grease"<br>
🔹 "Where is your showroom?"<br>
🔹 "Show me all premium products"<br><br>
<em>Your satisfaction is our luxury guarantee ✨</em>`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}
