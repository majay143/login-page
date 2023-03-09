function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	// Check if username and password are correct
	if (username === "user" && password === "pass") {
		alert("Login successful!");
	} else {
		alert("Incorrect username or password.");
	}
}
