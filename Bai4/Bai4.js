function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Replace the following condition with your own logic to check user credentials
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or perform any action after successful login
    } else {
        alert("Invalid username or password.");
    }
}