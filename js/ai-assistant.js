// AI Assistant for Aseptiq Products RSA
let assistantOpen = false;

// Product database for AI context
const productsDatabase = {
    "aluminium polish/wax": {
        name: "Aluminium Polish/Wax",
        price: "R349.99",
        size: "1 Litre",
        uses: ["Aluminium windows", "Kingdom doors", "Burglar bars", "Gates", "Aluminium frames"],
        howToUse: "1. Clean surface from dirt. 2. Apply small amount to soft cloth. 3. Rub in circular motion. 4. Buff with clean dry cloth.",
        bestFor: "Restoring faded aluminium surfaces, removing oxidation, adding protective shine"
    },
    "glass cleaner": {
        name: "Streak-Free Glass Cleaner",
        price: "R89.99",
        size: "500ml",
        uses: ["Windows", "Mirrors", "Glass tables", "Glass shower doors"],
        howToUse: "1. Spray on glass surface. 2. Wipe with microfiber cloth. 3. Buff for streak-free finish.",
        bestFor: "Streak-free shine on all glass surfaces"
    },
    "floor cleaner": {
        name: "Heavy-Duty Floor Cleaner",
        price: "R129.99",
        size: "1 Litre",
        uses: ["Tiles", "Marble", "Hardwood floors", "Laminate", "Vinyl"],
        howToUse: "1. Dilute 50ml per 5L water. 2. Mop floor. 3. No rinsing required.",
        bestFor: "All floor types, removing tough dirt without damaging finish"
    },
    "bathroom cleaner": {
        name: "Anti-Bacterial Bathroom Cleaner",
        price: "R99.99",
        size: "750ml",
        uses: ["Toilets", "Sinks", "Showers", "Tiles", "Baths"],
        howToUse: "1. Spray on surface. 2. Wait 2-3 minutes. 3. Scrub and rinse.",
        bestFor: "Removing limescale, soap scum, and killing 99.9% of bacteria"
    },
    "degreaser": {
        name: "Industrial Degreaser",
        price: "R179.99",
        size: "1 Litre",
        uses: ["Kitchens", "Stove tops", "Exhaust fans", "Garage floors", "Engine parts"],
        howToUse: "1. Apply directly to grease. 2. Let sit for 2 minutes. 3. Wipe or rinse.",
        bestFor: "Heavy grease and oil removal in industrial settings"
    },
    "sanitizer": {
        name: "Alcohol-Based Hand Sanitizer",
        price: "R49.99",
        size: "500ml",
        uses: ["Hands", "Surfaces", "Door handles", "High-touch areas"],
        howToUse: "1. Apply palm-sized amount. 2. Rub hands together. 3. Let air dry.",
        bestFor: "Quick hand disinfection when soap and water unavailable"
    }
};

// Initialize AI Assistant
function initAIAssistant() {
    const aiHTML = `
        <div id="aiAssistant" class="ai-assistant">
            <div class="ai-button" onclick="toggleAIAssistant()">
                🤖 <span class="ai-badge">AI</span>
            </div>
            <div id="aiWindow" class="ai-window">
                <div class="ai-header">
                    <h3>🤖 Aseptiq AI Assistant</h3>
                    <button onclick="toggleAIAssistant()">✕</button>
                </div>
                <div class="ai-messages" id="aiMessages">
                    <div class="ai-message bot">
                        👋 <strong>Hello! I'm your Aseptiq AI Assistant.</strong><br><br>
                        I can help you:<br>
                        • Choose the right product for your cleaning needs<br>
                        • Explain how to use our products<br>
                        • Recommend solutions for specific stains<br>
                        • Tell you where to buy our products<br><br>
                        <strong>Try asking me:</strong><br>
                        🔹 "How do I clean faded aluminium windows?"<br>
                        🔹 "What's best for glass streaks?"<br>
                        🔹 "I have tough grease on my stove"<br>
                        🔹 "Where can I buy your products?"<br>
                        🔹 "Show me all prices"
                    </div>
                </div>
                <div class="ai-input">
                    <input type="text" id="aiUserInput" placeholder="Ask me about our products..." onkeypress="handleAIKeyPress(event)">
                    <button onclick="sendAIMessage()">Send 📤</button>
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
    
    // Add user message to chat
    addMessage(userMessage, 'user');
    inputField.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get AI response (simulate thinking for realism)
    setTimeout(() => {
        const response = getAIResponse(userMessage);
        removeTypingIndicator();
        addMessage(response, 'bot');
    }, 500);
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
    typingDiv.innerHTML = '🤖 Aseptiq AI is thinking<span>.</span><span>.</span><span>.</span>';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function getAIResponse(userQuestion) {
    const question = userQuestion.toLowerCase();
    
    // Product recommendation logic based on keywords
    if (question.includes('aluminium') || (question.includes('faded') && question.includes('window')) || (question.includes('door') && question.includes('frame'))) {
        return `🔧 <strong>${productsDatabase["aluminium polish/wax"].name} - ${productsDatabase["aluminium polish/wax"].price}</strong><br><br>
📦 Size: ${productsDatabase["aluminium polish/wax"].size}<br><br>
<strong>✨ This is the BEST product for your needs!</strong><br><br>
<strong>📝 How to use:</strong><br>${productsDatabase["aluminium polish/wax"].howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase["aluminium polish/wax"].bestFor}<br><br>
📍 <strong>Where to buy:</strong> Available at our Soweto store (88 Mmila Road) or call +27 67 739 6525 for delivery!`;
    }
    
    if (question.includes('glass') || question.includes('window') && question.includes('clean') || question.includes('mirror') || question.includes('streak')) {
        return `✨ <strong>${productsDatabase["glass cleaner"].name} - ${productsDatabase["glass cleaner"].price}</strong><br><br>
📦 Size: ${productsDatabase["glass cleaner"].size}<br><br>
<strong>📝 How to use:</strong><br>${productsDatabase["glass cleaner"].howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase["glass cleaner"].bestFor}<br><br>
📍 Available now! Call +27 67 739 6525 to place your order.`;
    }
    
    if (question.includes('floor') || question.includes('tile') || question.includes('marble') || question.includes('wood') || question.includes('laminate')) {
        return `🧹 <strong>${productsDatabase["floor cleaner"].name} - ${productsDatabase["floor cleaner"].price}</strong><br><br>
📦 Size: ${productsDatabase["floor cleaner"].size}<br><br>
<strong>📝 How to use:</strong><br>${productsDatabase["floor cleaner"].howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase["floor cleaner"].bestFor}<br><br>
📍 Safe for all floor surfaces. Order today for nationwide delivery!`;
    }
    
    if (question.includes('bathroom') || question.includes('toilet') || question.includes('shower') || question.includes('limescale') || question.includes('soap scum') || question.includes('tiles')) {
        return `🚽 <strong>${productsDatabase["bathroom cleaner"].name} - ${productsDatabase["bathroom cleaner"].price}</strong><br><br>
📦 Size: ${productsDatabase["bathroom cleaner"].size}<br><br>
<strong>📝 How to use:</strong><br>${productsDatabase["bathroom cleaner"].howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase["bathroom cleaner"].bestFor}<br><br>
📍 Kills 99.9% of bacteria. Perfect for bathrooms!`;
    }
    
    if (question.includes('grease') || question.includes('degreaser') || question.includes('oil') || question.includes('stove') || question.includes('kitchen') || question.includes('cooking')) {
        return `🍳 <strong>${productsDatabase.degreaser.name} - ${productsDatabase.degreaser.price}</strong><br><br>
📦 Size: ${productsDatabase.degreaser.size}<br><br>
<strong>📝 How to use:</strong><br>${productsDatabase.degreaser.howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase.degreaser.bestFor}<br><br>
📍 Professional strength for tough kitchen and industrial jobs.`;
    }
    
    if (question.includes('sanitizer') || question.includes('hand') || question.includes('germ') || question.includes('virus') || question.includes('covid')) {
        return `🧴 <strong>${productsDatabase.sanitizer.name} - ${productsDatabase.sanitizer.price}</strong><br><br>
📦 Size: ${productsDatabase.sanitizer.size}<br><br>
<strong>📝 How to use:</strong><br>${productsDatabase.sanitizer.howToUse}<br><br>
<strong>🎯 Best for:</strong> ${productsDatabase.sanitizer.bestFor}<br><br>
📍 75% alcohol - kills 99.9% of germs instantly. Perfect for on-the-go!`;
    }
    
    if (question.includes('stain') || question.includes('spill') || question.includes('dirty') || question.includes('mark')) {
        return `🔍 <strong>Let me help you with stains!</strong><br><br>
For the best advice, please tell me:<br>
• 📍 What type of surface? (floor, glass, aluminium, bathroom, etc.)<br>
• 🎨 What caused the stain? (grease, water marks, oxidation, soap scum)<br>
• ⏰ How old is the stain?<br><br>
Then I can recommend the PERFECT product for your specific situation! 💪`;
    }
    
    if (question.includes('where') || question.includes('buy') || question.includes('purchase') || question.includes('pickup') || question.includes('location')) {
        return `📍 <strong>Where to get our products:</strong><br><br>
• 🏪 <strong>Store Pickup:</strong> 88 Mmila Road, Soweto, 1868<br>
• 📞 <strong>Phone Order:</strong> +27 (0) 67 739 6525<br>
• 💬 <strong>WhatsApp:</strong> 087 938 6526<br>
• ✉️ <strong>Email:</strong> info@aseptiqproducts.co.za<br><br>
🚚 <strong>We deliver nationwide!</strong> Free delivery on orders over R500.`;
    }
    
    if (question.includes('price') || question.includes('cost') || question.includes('how much') || question.includes('prices')) {
        return `💰 <strong>Our Product Prices:</strong><br><br>
• 🔧 Aluminium Polish/Wax: <strong>R349.99</strong> (1 Litre)<br>
• ✨ Glass Cleaner: <strong>R89.99</strong> (500ml)<br>
• 🧹 Floor Cleaner: <strong>R129.99</strong> (1 Litre)<br>
• 🚽 Bathroom Cleaner: <strong>R99.99</strong> (750ml)<br>
• 🍳 Industrial Degreaser: <strong>R179.99</strong> (1 Litre)<br>
• 🧴 Hand Sanitizer: <strong>R49.99</strong> (500ml)<br><br>
💼 <strong>Bulk discounts available for businesses!</strong> Call us for special pricing.`;
    }
    
    if (question.includes('help') || question.includes('what can you do')) {
        return `🤖 <strong>I can help you with:</strong><br><br>
✅ Recommend products based on your cleaning needs<br>
✅ Explain how to use each product properly<br>
✅ Compare products to find the best one for you<br>
✅ Tell you where to buy and delivery options<br>
✅ Give you prices and bulk discount info<br><br>
<strong>Try asking me specific questions like:</strong><br>
• "How do I remove oxidation from aluminium windows?"<br>
• "What's best for a greasy kitchen stove?"<br>
• "Which product removes glass streaks?"<br>
• "Do you deliver to Cape Town?"`;
    }
    
    // Default response
    return `🛒 <strong>How can I help you today?</strong><br><br>
Try asking me:<br>
🔹 "How do I clean faded aluminium windows?"<br>
🔹 "What removes tough grease from my stove?"<br>
🔹 "Best product for glass streaks?"<br>
🔹 "Where can I buy your products?"<br>
🔹 "Show me all prices"<br>
🔹 "Do you have bulk discounts?"<br><br>
<strong>I'm here to help you find the perfect cleaning solution!</strong> ✨`;
}

// Initialize AI assistant when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAssistant);
} else {
    initAIAssistant();
}
