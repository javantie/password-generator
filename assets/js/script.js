// Assignment code here

// Charater Selection
var capitalLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lowercCase = "abcdefghijklmnopqurstuvwyz"
var numbers = "123456789"
var speecialChar = "!@#$%^&*()_+"

function generatePassword() {
  var newPassword= ""
  var selectedPool = ""
  //Pompt to get len of password value
  var len = parseInt(prompt ("How long do you want your password to be?"))
  // Repeat the prompt until a number between 8-128 is entered
  while( Number.isNaN(len) || len<8 || len > 128 ){
    var len = parseInt(prompt ("Password MUST be a number between 8 and 128. How long do you want your password to be?"))
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
    newPassword += capitalLetters.charAt(Math.floor(Math.random())*capitalLetters.length)
  };

  if(useLower){
    selectedPool = selectedPool + lowercCase;
    newPassword += lowercCase.charAt(Math.floor(Math.random())*lowercCase.length)

  };

  if(useSpecialChar){
    selectedPool = selectedPool + speecialChar;
    newPassword += speecialChar.charAt(Math.floor(Math.random())*speecialChar.length)

  };

  if(useNumbers){
    selectedPool = selectedPool + numbers;
    newPassword += numbers.charAt(Math.floor(Math.random())*numbers.length)

  }; 
  console.log(selectedPool)

  // for(var i=0; i <len; i++) {
  //   newPassword +=selectedPool.charAt(Math.floor(Math.random())*len); 
  //   console.log(newPassword) 

    //return newPassword;
  
  //}
       for (var i= newPassword.length; i < len; i++) {
        newPassword += selectedPool.charAt(Math.floor(Math.random()*selectedPool.length));
      }
      return newPassword;
   // }
      //randomPick();
     // console.log(randomPick())
  //   return randomPick()
  
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
