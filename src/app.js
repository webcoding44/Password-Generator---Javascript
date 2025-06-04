const passwordField = document.getElementById('password');
const btn = document.getElementById('btn');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

btn.addEventListener('click', () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    passwordField.value = password;
});