// Assignment code here

// Charater Selection
var capitalLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lowercCase = "abcdefghijklmnopqurstuvwyz";
var numbers = "123456789";
var speecialChar = "!@#$%^&*()_+-=:;'<>?/.,{}[]|\~`";

var generatePassword = function () {
  var newPassword= "";
  var selectedPool = "";
  //Pompt to get length of password value
  var len = parseInt(prompt ("How long do you want your password to be?"));
  // Repeat the prompt until a number between 8-128 is entered
  while(Number.isNaN(len) || len<8 || len > 128 ){
    var len = parseInt(prompt ("Password MUST be a number between 8 and 128. How long do you want your password to be?"))
  }
  //Criteria Promt
  var useUpper = confirm ("Do you want to include Upper Case Letters?");
  var useLower = confirm ("Do you want to include Lower Case Letters?");
  var useSpecialChar = confirm ("Do you want to include Special Characters?");
  var useNumbers = confirm ("Do you want to include Numbers?");
 
 //Statments to choose criteria for password
  if(useUpper){
    selectedPool += capitalLetters;
    newPassword += capitalLetters.charAt(Math.floor(Math.random())*capitalLetters.length);
  };
  if(useLower){
    selectedPool += lowercCase;
    newPassword += lowercCase.charAt(Math.floor(Math.random())*lowercCase.length);
  };
  if(useSpecialChar){
    selectedPool += speecialChar;
    newPassword += speecialChar.charAt(Math.floor(Math.random())*speecialChar.length);
  };
  if(useNumbers){
    selectedPool +=numbers;
    newPassword += numbers.charAt(Math.floor(Math.random())*numbers.length);
  }; 

  //For loop to generate a new passwork base on the selected criteria in selected pool
  for (var i= newPassword.length; i < len; i++) {
    newPassword += selectedPool.charAt(Math.floor(Math.random()*selectedPool.length));
  };
 
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
