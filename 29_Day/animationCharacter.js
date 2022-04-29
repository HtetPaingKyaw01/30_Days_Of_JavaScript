let box = document.querySelector('.box');
let text = document.querySelector('.text');
let f = document.createElement('p');
let aa = '30 Days Of Javascript challeneg 2020  asabeneh yetayeh';

let h = aa.split('');

setInterval( () => {
    f.innerText = '';
    let a = Math.random().toString(16).substring(2,8);
    let b = '#' + a;

    box.style.backgroundColor = b;

    for(let i = 0;i < h.length;i++){
        let d = Math.random().toString(16).substring(2,8);
        let e = '#' + d;
        let g = document.createElement('span');
        
        g.innerText = h[i];
        g.style.color = e;
        g.style.fontSize = '75px';
        g.style.textTransform = 'uppercase'
        g.style.letterSpacing = '10px';
        
        f.appendChild(g);
    }

},1000)


box.appendChild(f);