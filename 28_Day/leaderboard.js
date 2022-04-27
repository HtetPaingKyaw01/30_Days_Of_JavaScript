let addBtn = document.querySelector('.add-btn');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
let notiBox = document.querySelector('.noti-box');
let outputBox = document.querySelector('.output-box');

let zz = [];
let z = [];

let date = new Date();

let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

switch(3 < 5){
    case month == 1:
        month = 'January';
        break;
    case month == 2:
        month = 'February';
        break;
    case month == 3:
        month = 'March';
        break;
    case month == 4:
        month = 'April';
        break;
    case month == 5:
        month = 'May';
        break;
    case month == 6:
        month = 'June';
        break;
    case month == 7:
        month = 'July';
        break;
    case month == 8:
        month = 'August';
        break;
    case month == 9:
        month = 'September';
        break;
    case month == 10:
        month = 'October';
        break;
    case month == 11:
        month = 'November';
        break;
    case month == 12:
        month = 'December';
        break;
}

if(day < 10){
    day = '0' + day;
};

if(hour < 10){
    hour = '0' + hour;
};

if(minute < 10){
    minute = '0' + minute;
};

function bb(aaa,bbb,ccc,ddd){
    let a = document.createElement('div');
    let b = document.createElement('div');
    let c = document.createElement('span');
    let d = document.createElement('span');
    let e = document.createElement('div');
    let f = document.createElement('div');
    let g = document.createElement('div');
    let h = document.createElement('div');
    let l = document.createElement('div');
    let m = document.createElement('div');

    a.classList.add('output');
    b.classList.add('name-box');
    c.classList.add('name-text');
    c.innerText = aaa;
    d.classList.add('date-text');
    d.innerText = bbb;
    e.classList.add('country-box');
    e.innerText = ccc;
    f.classList.add('score-box');
    f.innerText = ddd;
    g.classList.add('edit-box');
    h.classList.add('btn');
    h.classList.add('btn1');
    h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
    l.classList.add('btn');
    l.classList.add('btn2');
    l.innerText = '+5';
    m.classList.add('btn');
    m.classList.add('btn3');
    m.innerText = '-5';

    b.appendChild(c);
    b.appendChild(d);
    a.appendChild(b);
    a.appendChild(e);
    a.appendChild(f);
    g.appendChild(h);
    g.appendChild(l);
    g.appendChild(m);
    a.appendChild(g);
    outputBox.appendChild(a);
}

function getInfo(){
    zz = [];
    let bb = 0;
    for(let i = 0;i < outputBox.innerText.split('\n').length / 6;i++){           
        zz.push(outputBox.innerText.split('\n').slice(bb));
        bb += 6;
    };
}

function arrb(){
    z = [];
    for(zza of zz){
        z.push({
            name : zza[0],
            date : zza[1],
            country : zza[2],
            score : zza[3],
        })
    }
}

function arrc(){
    outputBox.innerHTML = '';
    for(let i = 0;i < zz.length;i++){
        let a = 0;
        for(za of z){
            if(za.score == 100){
                a = za.score;
            }
            if(za.score > a){
                a = za.score;
            };
        }
        let b = z.filter( el => el.score == a);
        console.log(a);
        for(let j = 0;j < b.length;j++){
            bb(b[j].name,b[j].date,b[j].country,b[j].score);
        }
        let c = z.filter( el => el.score !== a);
        z = c;
    }
}

let arrs = [
    {
        name : 'MARTHA YOHANES',
        country : 'Finland',
        score : 85
    },
    {
        name : 'David Smith',
        country : 'United Kingdom',
        score : 80
    },
    {
        name : 'John Smith',
        country : 'Finland',
        score : 75
    },
    {
        name : 'Mathias Elias',
        country : 'Sweden',
        score : 70
    },
]

function a(){
    for(arra of arrs){
        let a = document.createElement('div');
        let b = document.createElement('div');
        let c = document.createElement('span');
        let d = document.createElement('span');
        let e = document.createElement('div');
        let f = document.createElement('div');
        let g = document.createElement('div');
        let h = document.createElement('div');
        let l = document.createElement('div');
        let m = document.createElement('div');

        a.classList.add('output');
        b.classList.add('name-box');
        c.classList.add('name-text');
        c.innerText = arra.name.toUpperCase();
        d.classList.add('date-text');
        d.style.fontSize = '12px';
        d.style.color = 'gray';
        d.innerText = month.toUpperCase() + ' ' + day + ',' + year + ' ' + hour + ':' + minute;
        e.classList.add('country-box');
        e.innerText = arra.country.toUpperCase();
        f.classList.add('score-box');
        f.innerText = arra.score;
        g.classList.add('edit-box');
        h.classList.add('btn');
        h.classList.add('btn1');
        h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
        l.classList.add('btn');
        l.classList.add('btn2');
        l.innerText = '+5';
        m.classList.add('btn');
        m.classList.add('btn3');
        m.innerText = '-5';

        b.appendChild(c);
        b.appendChild(d);
        a.appendChild(b);
        a.appendChild(e);
        a.appendChild(f);
        g.appendChild(h);
        g.appendChild(l);
        g.appendChild(m);
        a.appendChild(g);
        outputBox.appendChild(a);
    }
};

a();

addBtn.addEventListener('click', () => {

    if(input1.value == '' && input2.value == '' && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'All fields are required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input1.value == '' && input2.value && input3.value && input4.value){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'First Name field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };
    
    if(input2.value == '' && input1.value && input3.value && input4.value || input1.value && input2.value == '' && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Last Name field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input3.value == '' && input2.value && input1.value && input4.value || input1.value && input2.value && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Country field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input4.value == '' && input2.value && input3.value && input1.value){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Player Score field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input1.value && input2.value && input3.value && input4){
        notiBox.innerHTML = '';
        
        let a = document.createElement('div');
        let b = document.createElement('div');
        let c = document.createElement('span');
        let d = document.createElement('span');
        let e = document.createElement('div');
        let f = document.createElement('div');
        let g = document.createElement('div');
        let h = document.createElement('div');
        let l = document.createElement('div');
        let m = document.createElement('div');

        a.classList.add('output');
        b.classList.add('name-box');
        c.classList.add('name-text');
        c.innerText = input1.value.toUpperCase() + ' ' + input2.value.toUpperCase();
        d.classList.add('date-text');
        d.innerText = month.toUpperCase() + ' ' + day + ',' + year + ' ' + hour + ':' + minute;
        e.classList.add('country-box');
        e.innerText = input3.value.toUpperCase();
        f.classList.add('score-box');
        f.innerText = input4.value;
        g.classList.add('edit-box');
        h.classList.add('btn');
        h.classList.add('btn1');
        h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
        l.classList.add('btn');
        l.classList.add('btn2');
        l.innerText = '+5';
        m.classList.add('btn');
        m.classList.add('btn3');
        m.innerText = '-5';

        b.appendChild(c);
        b.appendChild(d);
        a.appendChild(b);
        a.appendChild(e);
        a.appendChild(f);
        g.appendChild(h);
        g.appendChild(l);
        g.appendChild(m);
        a.appendChild(g);
        outputBox.appendChild(a);


        getInfo();
        arrb();
        arrc();
    }
});

getInfo();
arrb();


$('.output-box').delegate('.btn1','click',function(){
    $(this).parentsUntil('.output-box').remove();
});

$('.output-box').delegate('.btn2','click',function(){
    let score = $(this).parentsUntil('.output-box').find('.score-box').text();
    $(this).parentsUntil('.output-box').find('.score-box').html(Number(score) + 5);
    getInfo();
    arrb();
    arrc();
});

$('.output-box').delegate('.btn3','click',function(){
    let scoreb = $(this).parentsUntil('.output-box').find('.score-box').text();
    $(this).parentsUntil('.output-box').find('.score-box').html(Number(scoreb) - 5);
    getInfo();
    arrb();
    arrc();
});

