const nums = [2, 4, 62, 6, 2, 8];

// WAP to print square of all numbers in array

for(let i=0; i<nums.length; i++){
    console.log( nums[i] ** 2 );
}

console.log('---------------');

const newNums = [];


for(let n of nums){
    // console.log(n**2);
    console.log(newNums);
    newNums.push(n**2);
}

console.log(newNums);

console.log('-------Using Map Function--------');
// Using Map Function
const result = nums.map( (n) => { return n*2 } );
console.log(result);

const prices = [ 1329, 38267, 4002, 402, 5793, 352 ];
console.log(1329 * 0.05 + 1329 );
// use map function to add 5% GST to all prices

const newPrices = prices.map( (p) => ( p * 0.05 + p ) );

console.log(newPrices);

const prices2 = ['$2423.23', '$583.39', '$63.99', '$23.99', '$12.99', '$900.99'];

console.log( parseInt('$2423.23'.slice(1)) );

const numPrices = prices2.map( (p) => parseInt(p.slice(1)) );

console.log(numPrices);

// Using Filter Function
const filteredPrices = prices.filter( (p) => { return p>=500 && p<=5000 } );

console.log(filteredPrices);

const laptops = ['Dell Vostro', 'Acer Predator', 'Asus Vivobook', 
                    'HP Pavilion', 'Lenovo Thinkpad', 'Apple Macbook', 'Dell Inspiron'];

console.log('Dell Vostro'.includes('dell'));

const keyword = 'asus';
const searchData = laptops.filter( (title) => { return title.toLowerCase().includes(keyword.toLowerCase()) } );

console.log(searchData);