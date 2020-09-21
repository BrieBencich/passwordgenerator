// Assignment code here


// Prompts stating the criteria for the Password.
var criteria = window.alert("Please select the correct criteria you wish, to generate your new password. Password must be between 8-128 characters, with either lowercase, uppercase, specaial, or numeric chatacters. ");

// Amount of Characters in Password
var length = Number(prompt("Please choose how many characters your password will be ? Only between 8-128 Characters Please."));

// Prompt to let you know how to pick your character. 

var criteria= window.alert(" Please choose one of the following option, by typing it in the text ")

// Type of Characters you would like 
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

// characters that will generate your password
function generatePassword() { 
var charSet = "Password:"; 
var charTypeLower =chartType.tolowercase ();
if (charTypeLower= "lowercase"){
  charSet = "abcdefghijklmnopqrstuvwxyz";

}
}


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

