function submitMessage() {
  const msg = document.getElementById("message").value.trim();
  if (!msg) {
    alert("Please write something.");
    return;
  }

  let messages = JSON.parse(localStorage.getItem("anon_messages")) || [];
  messages.push({ text: msg, time: new Date().toLocaleString() });
  localStorage.setItem("anon_messages", JSON.stringify(messages));

  alert("Message sent anonymously!");
  document.getElementById("message").value = "";
}

function loadMessages() {
  const inbox = document.getElementById("inbox");
  let messages = JSON.parse(localStorage.getItem("anon_messages")) || [];

  if (messages.length === 0) {
    inbox.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  messages.reverse().forEach(msg => {
    let div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `<p>${msg.text}</p><small>${msg.time}</small>`;
    inbox.appendChild(div);
  });
}
