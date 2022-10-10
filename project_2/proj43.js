var manufacturer = "Danish";
var model = 2022;

function car(manufacturer, model) {
  return (car = {
    manufacturer,
    model,
    colour: "red",
  });
}

let data = car(manufacturer, model);
console.log(data)