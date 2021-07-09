// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
 
 
  var charPrompt = window.prompt('How many characters?');

   if (charPrompt >= 8 && charPrompt <= 123) {
      numberPrompt = window.confirm("Would you like to add numbers?");
      specialPrompt = window.confirm("Would you like to add special characters?");
      lowerPrompt = window.confirm("Would you like lowercase letters?");
      upperPrompt = window.confirm("Would you like uppercase letters?")
    }

    if (numberPrompt===true) {
      password += numbers
    }

    if (specialPrompt===true) {
      password += symbols
    }

    if (lowerPrompt===true) {
      password += lower
    }

    if (upperPrompt===true) {
      password += upper
    }

    var length =(charPrompt);
    for(var i = 0; i < length; i++){
      var random = Math.floor(Math.random() * password.length);
      password += password[random];
    }


};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
