const person = ['Ali','Danish','Yasir'];
const msg = `I am Inviting you to at Dinner please come and Do Dinner with me Thanks :)`
document.write('Friends Who are Coming in Dinner <br />')
for(let i = 0; i<person.length; i++){
    document.write(`${person[i]} <br />`)
}
const notcoming = person.pop();
document.write(notcoming, ` is not Coming <br />`)
let a = person.push("Iftihar")
for(let i = 0; i<person.length; i++){
    document.write(`${person[i]} <br />`)
}

