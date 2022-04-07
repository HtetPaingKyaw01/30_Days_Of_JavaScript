// Exercises: Level 1

function outerFunctionA(){
    let firstName = 'Htet Paing';
    let lastName = 'Kyaw';
    function innerFunctionA(){
        let fullName = firstName + ' ' + lastName;
        return fullName;
    };
    return innerFunctionA;
};

let abc = outerFunctionA();

console.log(abc());

// Exercises: Level 2

function outerFunctionB(){
    let firstName = 'Htet Paing';
    let lastName = 'Kyaw';
    let age;
    
    function innerFunctionB1(){
        let fullName = firstName + ' ' + lastName;
        return fullName;
    };
    function innerFunctionB2(){
        age = 20;
        return age;
    };
    function innerFunctionB3(){
        let country = 'Myanmar';
        let city = 'Yangon';
        let a = [];
        a.push(country);
        a.push(city);
        return a;
    }
    return {
        fullName : innerFunctionB1(),
        age : innerFunctionB2(),
        country : innerFunctionB3()[0],
        city : innerFunctionB3()[1]
    };
};

let def = outerFunctionB();

console.log(def);

// Exercises: Level 3

function personAccount(){
    let firstName = 'Htet Paing';
    let lastName = 'Kyaw';
    let incomes = [150000,320000,200000];
    let expenses = [1200000,9000000,240000];
    function totalIncome1(){
        let a = 0;
        for(income of incomes){
            a += income;
        };
        return a;
    };
    function totalExpenses1(){
        let a = 0;
        for(expense of expenses){
            a += expense;
        };
        return a;
    };
    function accountInfo1(){
        let userName = firstName + ' ' + lastName;
        let totalIncome = totalIncome1();
        let totalExpenses = totalExpenses1();
        return {
            UserName : userName,
            TotalIncome : totalIncome,
            TotalExpenses : totalExpenses
        };
    };
    function addIncome1(a){
        incomes.push(a);
        return totalIncome1();
    };
    function addExpenses1(a){
        expenses.push(a);
        return totalExpenses1();
    };
    function accountBalance1(){
        let totalAA = totalIncome1() + totalExpenses1();
        return totalAA;
    };
    
    return {
        accountInfo : accountInfo1,
        totalIncome : totalIncome1,
        totalExpenses : totalExpenses1,
        addIncome : addIncome1,
        addExpenses : addExpenses1,
        accountBalance : accountBalance1
    };
};

let personAccountA = personAccount();

console.log(personAccountA.addIncome(150005));

// Done Day 19 Complete