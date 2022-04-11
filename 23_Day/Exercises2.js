document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.overflow = 'hidden';

let a = document.createElement('div');
let d = document.createElement('div');
let b = document.createElement('div');
let c = document.createElement('span');

a.style.display = 'flex';
a.style.justifyContent = 'center';
a.style.alignItems = 'center';
a.style.height = '100vh';

b.style.boxShadow = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px';
b.style.width = '700px';
b.style.padding = '30px';
b.style.display = 'flex';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
c.innerText = 'Press any keyboard key';
c.style.fontSize = '40px';

b.appendChild(c);
d.appendChild(b);
a.appendChild(d);
document.body.appendChild(a);

let e = document.createElement('div');
let f = document.createElement('span');
let g = document.createElement('div');

e.style.width = '200px';
e.style.height = '150px';
e.style.marginTop = '30px';
e.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset';
g.style.display = 'none';
g.style.justifyContent = 'center';
g.style.alignItems = 'center';
f.style.fontSize = '100px';
f.style.height = '100%';
f.style.display = 'flex';
f.style.justifyContent = 'center';
f.style.alignItems = 'center';

e.appendChild(f);
g.appendChild(e);
d.appendChild(g);

let x = document.createElement('span');
let z = document.createElement('span');

document.body.addEventListener('keydown', el => {
    g.style.display = 'flex';
    f.innerText = el.keyCode;
    f.style.color = '#5bbc7a';
    c.innerText = 'You pressed';
    z.innerText = el.key;
    z.style.color = '#5bbc7a';
    z.style.fontSize = '40px';
    x.innerText = 'w';
    x.style.color = 'white';
    b.appendChild(x);
    b.appendChild(z);
});

// Done Day 23 Complete