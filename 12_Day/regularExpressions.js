// Exercises: Level 1

let a = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let patternA = /\d{1,5}/g;
let matchA = a.match(patternA);
let totalAnnualIncome = Number(matchA[0]) + Number(matchA[1]) + Number(matchA[2]);
console.log(totalAnnualIncome);

// Exercises: Level 2

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;


let tenMostFrequentWords = function(a,s){
    let bs = a.split('.');
    let h = bs.join('');
    let j = h.split(' ');
    let c = new Set(j);
    let e = [];
    let f = [];
    for(ca of c){
        let d = j.filter(el => {
            return el == ca;
        });
        e.push(d);
    };
    for(let i = 0;i < e.length;i++){
        f.push({word: e[i][0], count: e[i].length});
    };
    let g;
    let k = [];
    for(let i = 0;i < f.length;i++){
        g = 0;
        for(fa of f){
            if(fa.count > g){
                g = fa.count;
            };
        };
        let l = f.filter(el => {
            return el.count == g;
        });
        k.push(l);
        let m = f.filter( el => el.count !== g);
        f = m;
    }
    let p = [];
    for(ka of k){
        for(let q = 0;q < ka.length;q++){
            p.push(ka[q]);
        };
    };
    let r = p.slice(0,s);
    return r;
}

console.log(tenMostFrequentWords(paragraph,3));

// Exercises: Level 3

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

let z;

function cleanText(a){
    let pattern1 = /%/g;
    let pattern2= /@/g;
    let pattern3 = /&/g;
    let pattern4 = /;/g;
    let pattern5 = /!/g;
    let pattern6= /\$/g;
    let pattern7= /#/g;
    
    let b1 = a.replace(pattern1,'');
    let b2 = b1.replace(pattern2,'');
    let b3 = b2.replace(pattern3,'');
    let b4 = b3.replace(pattern4,'');
    let b5 = b4.replace(pattern5,'');
    let b6 = b5.replace(pattern6,'');
    let b7 = b6.replace(pattern7,'');
    
    z = b7;
};

cleanText(sentence);

console.log(z);

let x;

function mostFrequentWords(a,b){    
    let c = a.split(' ');
    let d = new Set(c);
    let f = [];
    for(da of d){
        let e = c.filter( el => {
            return el == da;
        });
         f.push({word: e[0], count: e.length});
    };
    let g;
    let h = [];
    for(let x = 0;x < f.length;x++){
        g = 0; 
        for(fa of f){
            if(fa.count > g){
                g = fa.count;
            };
        };
        let k = f.filter( ele => {
            return ele.count == g;
        });
        h.push(k);
        let j = f.filter( el => {
            return el.count !== g;
         });
         f = j;     
    }
    let l = [];
    for(ha of h){
        for(let y = 0;y < ha.length;y++){
            l.push(ha[y]);
        };
    };
    x = l.slice(0,b); 
    console.log(x);       
};

mostFrequentWords(z,5)

// Done Day 12 Complete




