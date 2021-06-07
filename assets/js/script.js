// Assignment code here
// var passwordLenght = 128
// var chatset = " 123456789abcdefghijklmnopqurstuvwxyz!@#$%^&*()_+"

// //Create Function to generate password: 
// var generatePassword = function(){
//   var criteriaPromt = window.prompt(" Please choose password criteria")

// //Get random number funtion
//   function getRandomNum() {
//     return Math.floor(Math.random() * 128) +1
//   }
//   for (var i = 0; i<chatset; i++){
//         console.log(getRandomNum([i]))
//   }



// Charater Selection
var capitalLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lowercCase = "abcdefghijklmnopqurstuvwyz"
var numbers = "123456789"
var speecialChar = "!@#$%^&*()_+"

function generatePassword() {
  var newPassword= ""
  var selectedPool = ""
  var lenght = prompt ("How long do you want your password to be?")

  while(lenght<8||lenght >128){
    var lenght = prompt ("Please enter a number between 8 and 128. How long do you want your password to be?")
  }

  var useUpper = confirm ("Do you want to include Upper Case?");
  var useLower = confirm ("Do you want to include Lower Case?");
  var useSpecialChar = confirm ("Do you want to include Special Charaters?");
  var useNumbers = confirm ("Do you want to include Numbers?");


  if(useLower){
    selectedPool = selectedPool + lowercCase;
  };
  if(useUpper){
    selectedPool = selectedPool + capitalLetters;
  };
  if(useSpecialChar){
    selectedPool = selectedPool + speecialChar;
  };
  if(useNumbers){
    selectedPool = selectedPool + numbers;
  };

//   //Get random number funtion
//   function getRandomNum() {
//     return Math.floor(Math.random() * 128)
//   }
//   for (var i = 0; i<chatset; i++){
//         console.log(getRandomNum([i]))
//   }
// }


}

//Create Function to generate password: 


  




// var generatePassword = function(){
//   var criteriaPromt = window.prompt("Please choose password criteria")

// //Get random number funtion
//   function getRandomNum() {
//     return Math.floor(Math.random() * 128) +1
//   }
//   for (var i = 0; i<chatset; i++){
//         console.log(getRandomNum([i]))
//   }
// }



// for (var i = 0; i<lenght; i++){
//  newPassword=newPassword + 
// }


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
