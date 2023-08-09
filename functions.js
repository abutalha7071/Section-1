function addNums(a, b){
    var c = a+b;
    console.log(c);
};

addNums(2673, 293856);

// console.log(c);

const getPercentage = function(m1, m2, m3, m4, m5){
    let total = m1+m2+m3+m4+m5;
    let percentage = total/5;
    console.log(percentage, '%');
}

getPercentage(67, 89, 93, 78, 89);

// new in ES6
const getFact = (num) => {
    let f = 1;
    for(let i=1; i<=num; i++){
        f *= i;
    };
    // console.log(f);
    return f;
}

const result = getFact(5);

console.log(result);

// create a function to print all prime numbers in a given range

const printPrime = (s, e) => {
    for(let i=s; i<=e; i++){
        checkPrime(i);
    }
}

const checkPrime = (n) => {
    let prime = true;

    for(let i=2; i<n; i++){
        if(n%i===0){
            prime = false;
            break;
        }
    }

    if(prime) console.log(n);
}

printPrime(300, 700);