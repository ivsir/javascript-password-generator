// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var validEntry = false;

// generates random integers picked from the length of each array
// var lowerCaseGenerator = Math.floor(Math.random() * lowerList.length);
// lowerGenerator = lowerList[lowerCaseGenerator];

// var upperCaseGenerator = Math.floor(Math.random() * upperList.length);
// upperGenerator = upperList[upperCaseGenerator];

// var specialCharGenerator = Math.floor(Math.random() * charList.length);
// specialGenerator = charList[specialCharGenerator];

// var numberListGenerator = Math.floor(Math.random() * numberList.length);
// numberGenerator = numberList[numberListGenerator];

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(min * (1 - Math.random()))
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  //repeats the prompt if the entry does not match the following criteria

  var userInput = prompt("How many characters would you like your password to contain?");
  var characterLength = parseInt(userInput);

  validReponse = false;
  while (validResponse === false) {
    if (characterLength <= 128 && characterLength >= 8) {

      validResponse = true;
    }
    else if (characterLength > 128) {
      alert("Password Length must be less than 128 characters");
    }
    else if (characterLength < 8) {
      alert("Password Length must be greater than 8 characters");
    }
    else if (isNaN(characterLength)) {
      alert("Please input a number.");
    }
  }

  specialCharConfirm = confirm("Click OK to confirm using special characters");
  lowerConfirm = confirm("Click OK to confirm using lowercase letters.");
  upperConfirm = confirm("Click OK to confirm using uppercase letters.");
  numberConfirm = confirm("Click OK to confirm using numbers.");

  var passwordCharacteristics = [];

  if (specialCharConfirm != null) {
    passwordCharacteristics.push(charList);
  }

  if (lowerConfirm != null) {
    passwordCharacteristics.push(lowerList);
  }

  if (upperConfirm != null) {
    passwordCharacteristics.push(upperList);
  }

  if (numberConfirm != null) {
    passwordCharacteristics.push(numberList);
  }

  generatePassword = "";

  for (var i = 0; i < characterLength; i++) {
    var randomList = getRandomItem(passwordCharacteristics);
    var randomChar = getRandomItem(randomList);
    generatePassword += randomChar;
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);