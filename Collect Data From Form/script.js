// Collecting Form Data

let fname = document.getElementById('fname').value;
console.log(fname);

let lname = document.getElementById('lname').value;
console.log(lname);

let email = document.getElementById('email').value;
console.log(email);

//Getting values from a dropdown list
let country = document.querySelector('#country').value;
console.log(country);

//Getting check radio button
let gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);

//Getting selected checkboxes
let hobbies = [];
hobby = document.getElementsByName('hobbies[]');
for (let i = 0; i < hobby.length; i++){
    if(hobby[i].checked){
        hobbies.push(hobby[i].value);
    }
}
console.log(hobbies);