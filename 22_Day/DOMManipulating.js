// Exercises: Level 1

let a = document.querySelector('.container');
let number;
for(let i = 0;i < 102;i++){
    number = document.createElement('div');
    number.style.fontSize = '24px';
    number.innerText = `${i}`;
    if(i % 2 == 0){
        number.style.backgroundColor = 'green';
    }
    if( i % 2 !== 0){
        number.style.backgroundColor = 'yellow';
    }
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
    }
    if(isPrime(i)){
        number.style.backgroundColor = 'red';
    };
    a.appendChild(number);   
};

// Exercises: Level 2

// Go to Exercises2.js file

// Exercises: Level 3

// Go to Exercises3.js file