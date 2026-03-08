const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Función para mostrar mensajes
function addMessage(sender, message) {
    const msg = document.createElement("div");
    msg.textContent = `${sender}: ${message}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Función de la IA simple
function getBotResponse(input) {
    input = input.toLowerCase();

    if(input.includes("hola")) return "¡Hola! 😺 ¿Cómo estás?";
    if(input.includes("adiós")) return "¡Adiós! Que tengas un buen día.";
    if(input.includes("nombre")) return "Me puedes llamar IA Básica.";
    
    return "Lo siento, no entiendo eso.";
}

// Evento del botón
sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if(input === "") return;

    addMessage("Tú", input);
    const botReply = getBotResponse(input);
    setTimeout(() => addMessage("IA", botReply), 500);

    userInput.value = "";
    userInput.focus();
});

// Enter también envía
userInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") sendBtn.click();
});
