// Assignment code here

// Charater Selection
var capitalLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lowercCase = "abcdefghijklmnopqurstuvwyz"
var numbers = "123456789"
var speecialChar = "!@#$%^&*()_+"

function generatePassword() {
  var newPassword= ""
  var selectedPool = ""
  //Pompt to get lenght of password value
  var lenght = prompt ("How long do you want your password to be?")
  console.log(lenght);
  // Repeat the prompt until a number between 8-128 is entered
  while(lenght<8||lenght >128){
    var lenght = prompt ("Please enter a number between 8 and 128. How long do you want your password to be?")
  }
  //Criteria Promt
  var useUpper = confirm ("Do you want to include Upper Case Letters?");
  var useLower = confirm ("Do you want to include Lower Case Letters?");
  var useSpecialChar = confirm ("Do you want to include Special Charaters?");
  var useNumbers = confirm ("Do you want to include Numbers?");
  console.log(useSpecialChar);
  console.log(useNumbers);
  console.log(useLower);
  console.log(useUpper);

 //Statments to choose criteria for password
  if(useUpper){
    selectedPool = selectedPool + capitalLetters;
    console.log(selectedPool)
  };
  if(useLower){
    selectedPool = selectedPool + lowercCase;
    console.log(selectedPool)
  };
  if(useSpecialChar){
    selectedPool = selectedPool + speecialChar;
    console.log(selectedPool)
  };
  if(useNumbers){
    selectedPool = selectedPool + numbers;
    console.log(selectedPool)
  }; 
  for(var i=0; i <lenght; i++) {
    newPassword += selectedPool.charAt(Math.floor(Math.random())*lenght); 
    console.log(newPassword) 
    return newPassword;
  }
  // var randomPick = function(){
  //   for (var i= 0; i < lenght; i++) {
  //     newPassword += selectedPool.charAt(Math.floor(Math.random()*lenght));
  //     console.log(newPassword);
  //     return newPassword;
  //   }
  // }
  // randomPick()
    //console.log(randomPick())
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
