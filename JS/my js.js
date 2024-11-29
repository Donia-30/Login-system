var users = JSON.parse(localStorage.getItem("users")) || [];

//(Sign Up)
function signUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var incorrectMessage = document.getElementById("incorrect");

    // Enter all the inputs
    if (!name || !email || !password) {
        incorrectMessage.textContent = "All inputs is required";
        return;
    }

    // The account is already registered
    var userExists = users.find(u => u.email === email);
    if (userExists) {
        incorrectMessage.textContent = "email already exists.";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // after sighn up go to login
    window.location.href = "index.html";
}

//(Login)
function login() {
    var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;
    var incorrectMessage = document.getElementById("incorrect");

    //  Enter all the inputs
    if (!email || !password) {
        incorrectMessage.textContent = "All inputs is required.";
        return;
    }

    // Bring data from localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Make sure the user is in localStorage??
    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        //data are correct=> go to home
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        //data arenot correct
        incorrectMessage.textContent = "Incorrect email or password.";
    }
}


function checkLogin() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        window.location.href = "index.html";
    }
    document.getElementById("welcomeMessage").textContent = "Welcome " + currentUser.name;
}

//(Logout)
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html"; // go to login page when user logout
}
