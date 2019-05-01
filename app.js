function getDogsAge(){

//set my age
const myAge = document.getElementById('inputAge').value;
//set earlyYears variable
let earlyYears = 2;
//first two years of dog's age equals 10.5 years
earlyYears = 10.5 * earlyYears;
//subtract 2 years from myAge since it's already calculated
let laterYears = myAge - 2;
//each year later is accounted for 4 years
laterYears = laterYears * 4;
//console.log(earlyYears);
//console.log(laterYears);
//total dog years
let myAgeInDogYears = earlyYears + laterYears;
//set my name to lowecase
let myName = document.getElementById('inputName').value;
myName = myName.toLowerCase();
//final output
//console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
const output = document.getElementById('output');
if(myAge !=0 && myName!=null)
  output.innerHTML = `Hi ${myName}, You're ${myAge} years old in human years which is <strong>${myAgeInDogYears} years</strong> old in dog years!`;
else {
  output.innerHTML = "PLEASE ENTER THE DATA FIRST!"
}
}
