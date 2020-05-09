// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Between 8 and 128 characters, how many characters would you like your password to be?")
  if (length < 8 || length > 128){
    alert("Length must be 8-128 characters")
}
  var symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (length >= 8 && length <= 128){
  var uppercase = confirm("Would you like to use uppercase letters?")
  var lowercase = confirm("Would you like to use lowercase letters?")
  var numbers = confirm("Would you like to use numbers?")
  var symbols = confirm("Would you like to use special characters?")
  }
  
  if (uppercase != true && lowercase != true && numbers != true && symbols != true){
    alert("You must select at least one character type!")
}
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
