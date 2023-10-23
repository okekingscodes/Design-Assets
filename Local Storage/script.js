// Function to store data locally

function storeData() {
    // Retrieving the data
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Retrieving stored data and using it for verification
    var user = localStorage.setItem("username", username);
    var em = localStorage.setItem("email", email);
    var pass = localStorage.setItem("password", password);

    var a, b, c;
    a = "john";
    b = "okekings@gmail.com";
    c = 12345;

    if (a == user && b == em && c == pass) {
        alert("Login successfully!")
    }else {
        alert("Invalid details!")
    }
}