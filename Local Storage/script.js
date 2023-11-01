// Function to store data locally

function storeData() {
    // Retrieving the data
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Retrieving stored data from local storage
    var user = localStorage.getItem("username");
    var em = localStorage.getItem("email");
    var pass = localStorage.getItem("password");

    if (user == a && em == b && pass == c) {
        alert("Login successfully!")
    } else {
        alert("Invalid details!")
    }
}
