var magicians_names = ["abc","cde","fgh"];
function make_great(name){
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(`Great ${element}`)
        
    }
}
const show_magicians = (name) =>{
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    console.log(element)
    
}
make_great(name);

}

show_magicians(magicians_names)