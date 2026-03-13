const API_KEY = "YOUR_API_KEY";

async function sendMessage(){

let input = document.getElementById("userInput");
let chatBox = document.getElementById("chatBox");

let userText = input.value;

chatBox.innerHTML += `<div class="user">${userText}</div>`;

input.value="";

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[{
parts:[{text:userText}]
}]
})
});

let data = await response.json();

let botReply = data.candidates[0].content.parts[0].text;

chatBox.innerHTML += `<div class="bot">${botReply}</div>`;

chatBox.scrollTop = chatBox.scrollHeight;
}