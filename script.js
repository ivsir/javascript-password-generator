// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var validEntry = false;

function randomInt(min, max) {
  if (!max) {
    max = min; 
    min = 0;
  }
  return Math.floor(max * Math.random())
}

function getRandomCharacteristic(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var validEntry = false;
  var userInput = prompt("How many characters would you like your password to contain?");
  var characterLength = parseInt(userInput);

  while (validEntry === false) {
    if (characterLength < 128 && characterLength > 8) {
      validEntry = true;
    }
    else if (characterLength > 128) {
      alert("Password Length must be less than 128 characters");
      return;
    }
    else if (characterLength < 8) {
      alert("Password Length must be greater than 8 characters");
      return;
    }
    else if (isNaN(characterLength)) {
      alert("Please input a number.");
      return;
    }
  }

  var specialCharConfirm = confirm("Click OK to confirm using special characters");
  var lowerConfirm = confirm("Click OK to confirm using lowercase letters.");
  var upperConfirm = confirm("Click OK to confirm using uppercase letters.");
  var numberConfirm = confirm("Click OK to confirm using numbers.");

  var passwordCharacteristics = [];

  if (specialCharConfirm === true) {
    passwordCharacteristics.push(charList);
  }

  if (lowerConfirm === true) {
    passwordCharacteristics.push(lowerList);
  }

  if (upperConfirm === true) {
    passwordCharacteristics.push(upperList);
  }

  if (numberConfirm === true) {
    passwordCharacteristics.push(numberList);
  }

  if (passwordCharacteristics.length === 0) {
    passwordCharacteristics.push(numberList);
  }

  var generatedPassword = "";

  for (var i = 0; i < characterLength; i++) {
    var randomList = getRandomCharacteristic(passwordCharacteristics);
    var randomChar = getRandomCharacteristic(randomList);
    // adds random character to the variable generated password until it hits the end of characterLength
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);