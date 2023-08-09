const user = {
  name: "Raju",
  email: "raju@mail.com",
  password: "456789",
};

console.log(user.email);
console.log(typeof user);

console.log(user["password"]);

user.address = "Lucknow";

console.log(user);

user.password = "abrakadabra";

console.log(user);

for (let k of Object.keys(user)) {
  console.log(k);
}

for (let k of Object.values(user)) {
  console.log(k);
}

for (let k of Object.entries(user)) {
  console.log(k);
}

const laptop = [
  { brand: "HP", model: "Pavilion", price: 69999, colors: ["black", "silver"] },
  { brand: "Lenevo", model: "Thinkpad", price: 56000, colors: ["black"] },
  { brand: "HP", model: "Elitebook", price: 68000, colors: "blue" },
  {
    brand: "Asus",
    model: "Ultrabook",
    price: 89999,
    colors: ["silver", "black", "white"],
  },
];

// syntax to get the price of ultrabook
// syntax to replace silver color with gray in ultrabook

console.log( laptop[3].price );

laptop[3].colors[0] = 'gray';

console.log( laptop );

for( let lap of laptop ){
    console.log(lap.brand);
}

// syntax to filter laptops having price less than 70000
// syntax to filter laptops having black color

const res1 = laptop.filter( (l) => {return l.price < 60000}  );

console.log(res1);

console.log(['red', 'blue', 'black'].includes('green'));

const res2 = laptop.filter((lappy) => { return lappy.colors.includes('black') })
console.log(laptop);
console.log(res2);