let fruits = ["banana", "orange", "grapes"];

console.log("List Of Your Favrite Fruits : ", fruits);
let isFound = true
let choise = prompt("Enter Fruit check it is in like List or not")
for(let i = 0 ; i< fruits.length; i++){
if(choise == fruits[i]){
    console.log(`${choise} is in Your Favourit List`)
    isFound = false;
    break;
}    
}
if(isFound){
    console.log(`${choise} is Not in Your Favraite List`)
}

