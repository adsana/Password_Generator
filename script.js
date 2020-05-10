// Assignment Code
var passwordEl = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordGenerate() {
  var passLength = prompt("Between 8 and 128 characters, how many characters would you like your password to be?")
  var newPasswordLength = parseInt(passLength);
    
  if (passLength < 8 || passLength > 128){
    alert("Length must be 8-128 characters")
}
  var symbols = ' !#$%&()*+-./;:<>=?@[]{}~^';
  var numbers = '0123456789';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var newPasswordLength;

  if (passLength >= 8 && passLength <= 128){
  var uppercase = confirm("Would you like to use uppercase letters?")
  var lowercase = confirm("Would you like to use lowercase letters?")
  var numbers = confirm("Would you like to use numbers?")
  var symbols = confirm("Would you like to use special characters?")
  }
  
  if (uppercase != true && lowercase != true && numbers != true && symbols != true){
    alert("You must select at least one character type!")
}

  var allCharacters = symbols + numbers + lowercase + uppercase;
  var a = symbols + numbers + lowercase;
  var b = symbols + numbers + uppercase;
  var c = symbols + lowercase + uppercase;
  var d = numbers + lowercase + uppercase;
  var e = symbols + numbers;
  var f = symbols + lowercase;
  var g = symbols + uppercase;
  var h = numbers + lowercase;
  var j = numbers + uppercase;
  var k = lowercase + uppercase;


  var password = generatePassword();

  if ((symbols === true) && (numbers === true) && (lowercase === true) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === true) && (lowercase === true) && (uppercase=== false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * a.length);
        password += a.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === true) && (lowercase === false) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * b.length);
        password += b.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === false) && (lowercase === true) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * c.length);
        password += c.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === true) && (lowercase === true) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * d.length);
        password += d.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === true) && (lowercase === false) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * e.length);
        password += e.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === false) && (lowercase === true) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * f.length);
        password += f.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === false) && (lowercase === false) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * g.length);
        password += g.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === true) && (lowercase === true) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * h.length);
        password += h.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === true) && (lowercase === false) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * j.length);
        password += j.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === false) && (lowercase === true) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * k.length);
        password += k.charAt(character, character + 1);
    }
}
else if ((symbols === true) && (numbers === false) && (lowercase === false) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * symbols.length);
        password += symbols.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === true) && (lowercase === false) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * numbers.length);
        password += numbers.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === false) && (lowercase === true) && (uppercase === false)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * lowerCase.length);
        password += lowerCase.charAt(character, character + 1);
    }
}
else if ((symbols === false) && (numbers === false) && (lowercase === false) && (uppercase === true)) {
    for (i = 0; i < passLength; i++) {
        var character = Math.floor(Math.random() * a.length);
        password += a.charAt(character, character + 1);
    }
}

var passwordDisplayed;
console.log(passwordDisplayed);

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


