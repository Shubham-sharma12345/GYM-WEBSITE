let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



// .......................................

const showmore = document.getElementById('showmore1')
const b1 = document.getElementById('b1')
b1.onclick = function() {show1()}
function show1(){
    if (showmore.style.display === "none") {
        showmore.style.display = "block"
        b1.innerHTML = "read less"
    } else {
        showmore.style.display = "none"
        b1.innerHTML = "read more"   
    }
}
const chatbotMessages = document.getElementById('chatbot-messages');

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value;
    if (message.trim() !== "") {
        addMessage("User", message);
        getBotResponse(message);
        input.value = "";
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    // A simple bot response example
    let botMessage;
    if (userMessage.toLowerCase().includes("hello")) {
        botMessage = "Hi there! How can I help you?";
    } else {
        botMessage = "I'm not sure how to respond to that.";
    }
    addMessage("Bot", botMessage);
}



const showmore2 = document.getElementById('showmore2')
const b2 = document.getElementById('b2')
b2.onclick = function() {show2()}
function show2(){
    if (showmore2.style.display === "none") {
        showmore2.style.display = "block"
        b2.innerHTML = "read less"
    } else {
        showmore2.style.display = "none"
        b2.innerHTML = "read more"   
    }
}
const showmore3 = document.getElementById('showmore3')
const b3 = document.getElementById('b3')
b3.onclick = function() {show3()}
function show3(){
    if (showmore3.style.display === "none") {
        showmore3.style.display = "block"
        b3.innerHTML = "read less"
    } else {
        showmore3.style.display = "none"
        b3.innerHTML = "read more"   
    }
}
// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
}

// Send Message Functionality
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message !== '') {
        addMessage('user', message);
        input.value = '';  // Clear input field

        // Respond based on user message
        setTimeout(() => {
            handleBotResponse(message.toLowerCase());
        }, 500);
    }
}

// Add Message to Chat Window
function addMessage(sender, message) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;  // Scroll to the bottom
}

// Handle Bot Response with Diet Plan Recommendations
function handleBotResponse(userMessage) {
    let response;

    if (userMessage.includes('weight loss')) {
        response = `For weight loss, try this plan:
- Breakfast: Oats with fruits
- Lunch: Grilled chicken salad
- Snack: A handful of almonds
- Dinner: Grilled fish with vegetables`;
    } else if (userMessage.includes('muscle gain')) {
        response = `For muscle gain, here's a plan:
- Breakfast: Scrambled eggs with avocado
- Lunch: Grilled chicken with quinoa
- Snack: Greek yogurt with nuts
- Dinner: Steak with sweet potatoes`;
    } else if (userMessage.includes('general health')) {
        response = `For general health, you can follow this balanced plan:
- Breakfast: Smoothie with spinach, banana, and almond milk
- Lunch: Brown rice with vegetables and tofu
- Snack: Apple with peanut butter
- Dinner: Lentil soup with whole grain bread`;
    } else {
        response = `I can help with diet plans! Try asking for:
- Weight loss plan
- Muscle gain plan
- General health plan`;
    }

    addMessage('bot', response);
}

