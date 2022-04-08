// Exercises: Level 1

let a = document.querySelector('p');

console.log(a);

let b = document.querySelector('#b');
console.log(b);

let c = document.querySelector('#c');
console.log(c);

let d = document.querySelector('#d');
console.log(d);

let e = document.querySelector('#e');
console.log(e);

let f = document.querySelectorAll('p');
console.log(f);

for(fa of f){
    console.log(fa.innerText);
};

f[3].innerText = 'Set a text content to paragraph the fourth paragraph,Fourth Paragraph';

console.log(f[3]);

let g = document.querySelector('#b');
g.id = 'bb';
g.className = 'b';

console.log(g);

let h = document.querySelector('#c');
h.setAttribute('id','cc');
h.setAttribute('class','c');

console.log(h);

let i = document.querySelector('#d');
i.classList.add('d');

console.log(i);

// Exercises: Level 2

let j = document.querySelectorAll('p');

for(let k = 0;k < j.length;k++){
    j[k].style.color = 'white';
    j[k].style.backgroundColor = 'yellow';
    j[k].style.border = '10px solid black';
    j[k].style.fontSize = '20px';
};

for (let l = 0;l < j.length;l++){
    if (l % 2 == 0){
        j[l].style.color = 'red';
    } else {
        j[l].style.color = 'green';
    }
};

j.forEach( (el,index) => {
    el.id = `l${index}`;
    el.className = `l${index}`;
    el.innerText = 'The year color is changing every 1 second';
});

// Exercises: Level 3

// Go to Exercises3.js file

// Done Day 21 Complete