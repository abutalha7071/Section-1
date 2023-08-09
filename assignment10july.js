const temp = 30;

far_temp = (temp * 9/5) + 32;

console.log('Temperature for '+temp+'degree C in Fahrenheit is '+far_temp+'degree F');

console.log(`Temperature for ${temp} degree C in Fahrenheit is ${far_temp} degree F`);

let [a, b] = [0, 1];
console.log(`${a}\n${b}`);

while(a+b<100){
    let sum = a+b;
    console.log(sum);
    [a, b] = [b, sum]
}