// Exercises: Level 1

localStorage.setItem('firstName','Htet Paing');
localStorage.setItem('lastName','Kyaw');
localStorage.setItem('age',20);
localStorage.setItem('country','Myanmar');
localStorage.setItem('city','Yangon');

// Exercises: Level 2

let student = {
    firstName : 'Win War',
    lastName : 'Htoo',
    age : 20,
    skills : ['HTML','CSS','JavaScript','Japanese(N5)','Japanese(N4)'],
    country : 'Myanmar',
    enrolled : 'MMS One Stop It Solutions'
};

let studentA = JSON.stringify(student,undefined,4);

localStorage.setItem('studentA',studentA);

console.log(localStorage.getItem('studentA'));

// Exercises: Level 3

let personAccount = {
    firstName : 'Htet Paing',
    lastName : 'Kyaw',
    incomes : [320000,150000,200000],
    expenses : [120000,240000,9000000],
    totalIncome : function(){
        let a = 0;
        for(let i = 0;i < this.incomes.length;i++){
            a += this.incomes[i];
        };
        return a;
    },
    totalExpenses : function(){
        let b = 0;
        for(let i = 0;i < this.expenses.length;i++){
            b += this.expenses[i];
        };
        return b;
    },
    accountInfo : function(){
        let info = `Username : ${this.firstName} ${this.lastName}\nTotalIncome : ${this.totalIncome()}\nTotalExpenses : ${this.totalExpenses()}`;
        return info;
    },
    addIncome : function(a){
        let add = this.incomes.push(a);
    },
    addExpenses : function(a){
        let add = this.expenses.push(a);
    },
    accountBalance : function(){
        let total = this.totalIncome() + this.totalExpenses();
        return total;
    }
};

let personAccountA = JSON.stringify(personAccount,undefined,4);

localStorage.setItem('personAccountA',personAccountA);

console.log(localStorage.getItem('personAccountA'));

// Done Day 17 Complete