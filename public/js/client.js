console.log("CLIENT");

// Get messages from localStorage
let messages = JSON.parse(localStorage.getItem("messages")) || [];
renderMessages();

if (messages.length > 0) {
  personality.value = messages[0].content;
} else {
  personality.value = "You are an assistant that speaks like Yoda.";
}

saveButton.addEventListener("click", async function (e) {
  console.log("Button save clicked.");
  saveButton.disabled = true;
  if (personality.value !== messages[0].content) {
    messages = [];
    messages[0] = { role: "system", content: personality.value };
  }

  if (message.value.length > 0) {
    messages.push({ role: "user", content: message.value });
    try {
      // send to open ai
      const res = await fetch(`/completion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messages }),
      });

      const { result } = await res.json();
      saveButton.disabled = false;
      messages.push({ role: "assistant", content: result });
    } catch (error) {
      console.error(error);
    }
  }
  localStorage.setItem("messages", JSON.stringify(messages));
  console.log(messages);
  renderMessages();
  message.value = "";
});

function renderMessages() {
  chats.textContent = messages.map((message) => {
    return `${message.role}: ${message.content}`;
  }).join("\n");
}
