// Exercises: Level 1

class Animal {
    constructor(name,age,color,legs,gender){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.gender = gender;
    };
    getAnimalInfo(){
        let proun01 = this.gender == 'Male' ? 'His' : 'her';
        let proun02 = this.gender == 'Male' ? 'he' : 'she';

        let info = `${proun01} name is ${this.name} and ${proun02} is ${this.age}.${proun01} color is ${this.color} and ${proun02} has ${this.legs} legs.`;
        return info;
    };
};

let animal = new Animal('Phyu Lone',5,'white',4,'Male');

console.log(animal.getAnimalInfo());

class Dog extends Animal{
    
};

let dog = new Dog('Phyu Lone',4,'white',4,'Female');

console.log(dog.getAnimalInfo());

class Cat extends Animal{
    
};

let cat = new Cat('Pussy',3,'Brown',4,'Male');

console.log(cat.getAnimalInfo());

// Exercises: Level 2

class a extends Animal {
    constructor(name,age,color,legs,gender,IsMarried){
        super(name,age,color,legs,gender)
        this.IsMarried = IsMarried;
    };
    getAnimalInfo(){
        let proun01 = this.gender == 'Male' ? 'His' : 'Her';
        let proun02 = this.gender == 'Male' ? 'he' : 'she';

        let info = `${proun01} name is ${this.name} and ${proun02} is ${this.age}.${proun01} color is ${this.color} and ${proun02} has ${this.legs} legs.${proun02[0].toUpperCase()}${proun02.slice(1)} is ${this.IsMarried}.`;
        return info;
    };
};

let as = new a('Pussy',4,'Black',4,'Male','single');

console.log(as.getAnimalInfo());

// Exercises: Level 3\

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    constructor(arr){
        this.arr = arr;
    };
    count(){
        let a = this.arr.length;
        return a;
    };
    sum(){
        let b = 0;
        for(let i = 0;i < this.arr.length;i++){
            b += this.arr[i];
        };
        let c = b;
        return c;
    };
    min(){
        let d = this.arr.sort();
        let e =  d[0];
        return e;
    };
    max(){
        let f = this.arr.sort();
        let g =  f[f.length-1];
        return g;
    };
    range(){
        let h = this.arr.sort();
        let j = h[h.length-1] - h[0];
        let k =  j;
        return k;
    };
    mean(){
        let l = this.arr.sort();
        let m = this.sum() / this.count();
        let n =  Math.ceil(m);
        return n;
    };
    median(){
        let o = this.arr.sort();
        let p = this.sum() / this.count();
        return Math.floor(p);
    };
    var(){
        let q = this.arr.sort();
        let s = this.sum() / this.count();
        let u = [];
        for(let i = 0;i < this.arr.length;i++){
            let t = (this.arr[i] - s) ** 2;
            u.push(t);
        };
        let v = 0;
        for(let j =0;j < u.length;j++){
            v += u[j];
        };
        let w = v / this.count();
        return w.toFixed(1);
    };
    std(){
        let x = Math.sqrt(this.var());
        return x.toFixed(1);
    };
    describe(){
        return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}Range: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}`;
    };
};

let statistics = new Statistics(ages);

console.log('Count: ' + statistics.count());
console.log('Sum: ' + statistics.sum());
console.log('Min: ' + statistics.min());
console.log('Max: ' + statistics.max());
console.log('Range: ' + statistics.range());
console.log('Mean: ' + statistics.mean());
console.log('Median: ' + statistics.median());
console.log('Variance: ' + statistics.var());
console.log('Standard Deviation: ' + statistics.std());
console.log(statistics.describe());

class PersonAccount {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    };
    set setIncomes(a){
        this.incomes.push(a);
    };
    set setExpenses(b){
        this.expenses.push(b);
    };
    totalIncome(){
        let a = 0;
        for(let i = 0;i < this.incomes.length;i++){
            a += this.incomes[i];
        };
        return a;
    };
    totalExpenses(){
        let a = 0;
        for(let i = 0;i < this.expenses.length;i++){
            a += this.expenses[i];
        };
        return a;
    };
    accountInfo(){
        let fullName = this.firstName + ' ' + this.lastName;
        return `Username: ${fullName}\nIncomes: ${this.totalIncome()}\nExpenses: ${this.totalExpenses()}`;
    };
    addIncome(a){
        this.incomes.push(a);
    };
    addExpenses(a){
        this.expenses.push(a);
    };
    accountBalance(){
        let a = this.totalIncome() + this.totalExpenses();
        return a;
    };
};

let personAccount = new PersonAccount('Htet Paing','Kyaw');

personAccount.setIncomes = 320000;
personAccount.setIncomes = 35000;
personAccount.setIncomes = 70000;

personAccount.setExpenses = 1200000;
personAccount.setExpenses = 16000000;

console.log(personAccount.addIncome(100000));
console.log(personAccount.addExpenses(1500000));

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

// Done Day 15 Complete
