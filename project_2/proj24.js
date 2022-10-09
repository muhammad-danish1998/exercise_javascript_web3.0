let alien_color = [ 'yellow', 'red',"green"];
isTrue = true;
// console.log(`if alien colour is green the player just earned 5 points`);
for(let i = 0; i< alien_color.length; i++){
    if(alien_color[i] == "green"){
        console.log(`green colour is present so the player just earned 5 points`)
        isTrue = false;
        break;
    }
    
   
}
if(isTrue){
    console.log("Sorry")
}