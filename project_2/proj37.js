var city = prompt(`enter Your City name `);
var country = prompt(`enter Your Country name `);

const describeCity = (city, country) => {
  return (`"${city}" , "${country}"`);
};

const data = describeCity(city, country);

console.log(data)