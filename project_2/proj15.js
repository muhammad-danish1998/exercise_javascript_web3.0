const person = ["Ali", "Danish", "Yasir"];
console.log(`Friends Who are already Coming`);
for (let i = 0; i < person.length; i++) {
  console.log(`${person[i]} \n`);
}
person.unshift("Iftihar");
console.log(`Iftihar is added begining of array`);
console.log(person);
person.splice(2, 0, "Nadir Ali");
console.log(`Nadir Ali is added middle of array`);
console.log(person);
person.push("Zia");
console.log(`Zia is added End of array`);
console.log(person);
for (let i = 0; i < person.length; i++) {
  console.log(`Mr ${person[i]},  It is Request to Come to Dinner Please  \n`);
}
