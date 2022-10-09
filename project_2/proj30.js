let current_users = ["ali", "zia", "asif", "maha", "ayan"];
let new_users = ["ali", "zia", "asif", "danish", "raza"];
for (let i = 0; i < current_users.length; i++) {
  if(current_users[i] == new_users[i]){
    // console.log(`${current_users[i]} = ${new_users[i]}`)
    alert("User is Avaliable")
    console.log("please Enter another user")
    break;
  }
}

