const users = ["ali","adil","hassan","danish"];
let inputUSer = prompt("Your Name for Login")
let isFound = true;
for(let i =0; i< users.length; i++){
    if(inputUSer == users[i]){
        if(inputUSer == "danish"){
            console.log("Hello admin, would you like to see a status report?")
        }
        else{
            console.log(`Hello ${inputUSer}, thank you for logging in again`)
        }
        isFound = false
    }
}
if(isFound){
    console.log(`${inputUSer} is Not Register Please Register First`)
}
