
function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    const greeting = document.getElementById("greeting");

    if (name === "") {
        greeting.textContent = "Please enter your name!";
    } else {
        greeting.textContent = "Hello, " + name + "! Have a great day! 😊";
    }
}
