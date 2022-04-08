let aa = document.querySelector('#years');
aa.style.fontSize = '50px';

setInterval(() => {
    let bb = (Math.random() * 255).toString(16).substring(3,9);
    let cc = '#' + bb
    aa.style.color = cc;
    
}, 1000);

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let years = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

switch(month){
    case 1:
        monthText = 'January';
        break;
    case 2:
        monthText = 'February';
        break;
    case 3:
        monthText = 'March';
        break;
    case 4:
        monthText = 'April';
        break;
    case 5:
        monthText = 'May';
        break;
    case 6:
        monthText = 'June';
        break;
    case 7:
        monthText = 'July';
        break;
    case 8:
        monthText = 'August';
        break;
    case 9:
        monthText = 'September';
        break;
    case 10:
        monthText = 'October';
        break;
    case 1:
        monthText = 'November';
        break;
    case 1:
        monthText = 'December';
        break;
};

let time = monthText + ' ' + day + ',' + years + ' ' + hour + ':' + minute + ':' + second;

let dd = document.querySelector('#dateText');
dd.innerText = time;

setInterval(() => {
    let ee = (Math.random() * 255).toString(16).substring(3,9);
    let ff = '#' + ee;
    dd.style.backgroundColor = ff;
}, 1000);

let gg = document.querySelectorAll('.done');

for(g of gg){
    g.style.backgroundColor = 'green';
};

let hh = document.querySelectorAll('.ongoing');

for(h of hh){
    h.style.backgroundColor = 'yellow';
};

let aaa = document.querySelectorAll('.coming');

for(a of aaa){
    a.style.backgroundColor = 'red';
};

// Done