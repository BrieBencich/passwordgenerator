// Assignment code here


// Prompts stating the criteria for the Password.
var criteria = window.alert("Please select the correct criteria you wish, to generate your new password. Password must be between 8-128 characters, with either lowercase, uppercase, specaial, or numeric chatacters. ");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

