function passwordGenerate() {

  var passLength = prompt("Enter Desired Password Length. Min 8 Characters and 128 Max.");

  // Verify that password length meets requirements and creates an array that is the same length as the user input.
  if (passLength >= 8 && passLength <= 128) {
      var newPasswordLength = parseInt(passLength);
      //var newPasswordLength = passLength;
  //console.log(newPasswordLength);
  var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
  var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
  var confirmNumbers = confirm("Have Password Contain Numbers?");
  var confirmSpecial = confirm("Have Password Contain Special Characters?");

  var newPasswordLength;

  // variables for all values.
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

  // check to see which confirmations have been selected.

  // 1.) if all options are selected
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


  // 2.) if only uppercase, lowercase, & numbers are selected
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


  // 3.) if only uppercase & lowercase are selected
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


  // 4.) if only uppercase is selected
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

  // 5.) if only lowercase is selected
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


  // 6.) if only numbers are selected
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


  // 7.) if only symbols are selected
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

  // 8.) if only numbers & symbols are selected
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


  // 9.) if only lowercase & numbers are selected
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


  // 10.) if only lowercase & numbers are selected
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
      alert("Please select at least one conditional choice from lower or uppercase letters, numbers, or special characters");
  }

  }
  else {
      alert("Please enter a number between 8 and 128");
  }

 

}

var passwordDisplayed;
console.log(passwordDisplayed);
