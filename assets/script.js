// Assignment code here
let generateBtn= document.querySelector('#generate');
// Declare variables
const upperCaseEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseEl = 'abcdefghijklmnopqrstuvwxyz';
const symbolsEl = '!@#$%^&*()_+=-{}[]:";"<>,.?/';
const numberEl = '1234567890';

let newPassword = ""

// prompt questions and answers
function generatePassword() {
  // console.log("btn was clicked");
  let passwordLength = prompt("How many characters of password would you like to have? Enter numbers between 8 to 128");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a number between 8 to 128.");

  } else { 
    let lowercase = confirm("Would you like to use lowecase characters?");
    if (lowercase) {
      newPassword +=lowerCaseEl
    };
    let upperCase = confirm("Would you like to use Uppercase characters?");
    if (upperCase) {
      newPassword += upperCaseEl
    };
    let numbers = confirm("Would you like to use Numbers?");
    if(numbers) {
      newPassword += numberEl
    };
    let symbols = confirm("Would you like to use symbols?");
    if(symbols) {
      newPassword += symbolsEl
    };
    // console.log("prompt works?");
    if(lowercase === false && upperCase === false && symbols === false && numbers == false) {
      alert("Please select at least one character type");
      generatePassword();
    }
  }
  let pwd = "";
  for (let i = 0; i < passwordLength; i++) {
    pwd += newPassword.charAt(Math.floor(Math.random() * newPassword.length))
  }
  return pwd
  
}

function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);