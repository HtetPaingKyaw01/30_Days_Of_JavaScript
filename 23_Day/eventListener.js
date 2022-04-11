document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';

let a = document.createElement('h1');
a.innerText = 'Number Generator';
a.style.color = '#5bbc7a';
a.style.margin = '0px';
a.style.textAlign = 'center';

document.body.appendChild(a);

let b = document.createElement('div');
let c = document.createElement('span');
b.style.textAlign = 'center';
b.style.margin = '5px 0px';

c.innerText = '30DaysOfJavascript:DOM Day3';
c.style.fontSize = '20px';

b.appendChild(c);
document.body.appendChild(b);

let d = document.createElement('div');
let e = document.createElement('span');
d.style.textAlign = 'center';

e.innerText = 'Author: Htet Paing Kyaw';

d.appendChild(e);
document.body.appendChild(d);

let f = document.createElement('div');
let g = document.createElement('div');
let h = document.createElement('input');
let l = document.createElement('div');
let m = document.createElement('span');

m.innerText = 'Generate numbers';
m.style.color = 'white';
l.style.backgroundColor = '#5bbc7a';
l.style.display = 'inline-block';
l.style.padding = '10px';
l.style.marginLeft = '20px';
h.style.width = '500px';
h.style.padding = '9px';
h.style.border = '2px solid #5bbc7a';
h.setAttribute('placeholder','Generate more numbers ....')
f.style.textAlign = 'center';
f.style.margin = '20px 0px';

l.appendChild(m);
g.appendChild(h);
g.appendChild(l);
f.appendChild(g);
document.body.appendChild(f);

let n = document.createElement('div');
let o = document.createElement('div');
n.style.textAlign = 'center';
o.style.width = '1000px';
o.style.display = 'inline-block';

function generate(number){
    for(let i = 0;i < number;i++){
        let p = document.createElement('div');
        let r = document.createElement('div');
        let q = document.createElement('span');

        q.innerText = `${i}`;
        q.style.color = 'white';
        q.style.fontSize = '30px';
        p.style.display = 'inline-block';
        p.style.margin = '5px';
        p.style.width = '50px';
        p.style.padding = '0px 30px';
        r.style.display = 'flex';
        r.style.justifyContent = 'center';

        if(i % 2 == 0){
            p.style.backgroundColor = '#5bbc7a';
        };

        if(i % 2 !== 0){
            p.style.backgroundColor = '#f7dc5c';
        };

        const isPrime = num => {
            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
                if(num % i === 0) return false; 
            return num > 1;
        };

        if(isPrime(i)){
            p.style.backgroundColor = '#eb695b';
        };

        r.appendChild(q);
        p.appendChild(r);
        o.appendChild(p);
    };
};

l.addEventListener('click', () => {
    o.innerHTML = '';
    generate(Number(h.value));
});

n.appendChild(o);
document.body.appendChild(n);