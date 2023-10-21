console.log("CLIENT");

saveButton.addEventListener("click", async function () {
  console.log("Button save clicked.");
  saveButton.disabled = true;
  try {
    // send to open ai
    const res = await fetch(`/completion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message.value }),
    });

    const { messages } = await res.json();
    saveButton.disabled = false;
    renderMessages(messages);
  } catch (error) {
    console.error(error);
  }
  message.value = "";
});

function renderMessages(messages) {
  chats.textContent = messages.map((message) => {
    return `${message.role}: ${message.content}`;
  }).join("\n\n");
}
