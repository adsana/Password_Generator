function passwordGenerate() {

  var passLength = prompt("Enter Desired Password Length. Min 8 Characters and 128 Max.");

  if (passLength >= 8 && passLength <= 128) {
      var newPasswordLength = parseInt(passLength);
 

  var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
  var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
  var confirmNumbers = confirm("Have Password Contain Numbers?");
  var confirmSpecial = confirm("Have Password Contain Special Characters?");

  var newPasswordLength;

  
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

  if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmUppercase && confirmLowercase && confirmNumbers && confirmSpecial) {
      function generate(length = newPasswordLength){
          var all = upperCase + lowerCase + numbers + symbols;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }

  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmUppercase && confirmLowercase && confirmNumbers) {
      function generate(length = newPasswordLength){
          var all = upperCase + lowerCase + numbers;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmUppercase && confirmLowercase) {
      function generate(length = newPasswordLength){
          var all = upperCase + lowerCase;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmUppercase) {
      function generate(length = newPasswordLength){
          var all = upperCase;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmLowercase) {
      function generate(length = newPasswordLength){
          var all = lowerCase;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmNumbers) {
      function generate(length = newPasswordLength){
          var all = numbers;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmSpecial) {
      function generate(length = newPasswordLength){
          var all = symbols;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmNumbers && confirmSpecial) {
      function generate(length = newPasswordLength){
          var all = numbers + symbols;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmLowercase && confirmNumbers) {
      function generate(length = newPasswordLength){
          var all = lowerCase + numbers;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }


  else if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmLowercase && confirmSpecial) {
      function generate(length = newPasswordLength){
          var all = upperCase + lowerCase + numbers + symbols;
          var password = '';
              for (var index = 0; index < length; index++) {
                  var character = Math.floor(Math.random() * all.length);
                  password += all[(character, character + 1)];
              }
              document.getElementById("passwordOutput").innerHTML = password;
          return password;
      }
      generate(newPasswordLength);
  }

  else {
      alert("Please pick one characteristic");
  }

  }
  else {
      alert("Please enter a number between 8 and 128");
  }

 

}

var passwordDisplayed;
console.log(passwordDisplayed);
