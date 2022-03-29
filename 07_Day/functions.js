function fullName(){
    let fullName = 'Htet Paing Kyaw';
    console.log(fullName);
};

fullName();

function aa(firstName,lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

console.log(aa('Htet Paing','Kyaw'));

function addNumbers(num01,num02){
    let sum = num01 + num02;
    return sum;
}

console.log(addNumbers(3,7));

function areaOfRectangle(length,width){
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(23,35));

function perimeterOfRectangle(length,width){
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(23,35));

function volumeOfRectPrism(length,width,height){
    let volume = length * width * height;
    return volume;
}

console.log(volumeOfRectPrism(23,35,13));

function areaOfCircle(r){
    let area = 3.14 * r * r;
    return area;
}

console.log(areaOfCircle(26));

function circumOfCircle(r){
    let circum = 2 * 3.14 * r;
    return circum;
}

console.log(circumOfCircle(26));

function density(mass,volume){
    let density = mass / volume;
    return density;
}

console.log(density(25,34));

function speed(distance,time){
    let speed = distance / time;
    return speed;
}

console.log(speed(26,5));

function weight(mass,gravity){
    let weight = mass * gravity;
    return weight;
}
console.log(weight(25,9.8));

function convertToF(C){
    let F = (C * (9 / 5)) + 32;
    return F;
}

console.log(convertToF(37));

function BMI(weight,height){
    let bmi = weight / (height * height);
    if( bmi < 18.5 ){
        console.log('This person is underweight.');
    }else if( bmi > 18.5 && bmi < 24.9){
        console.log('This person is normal weight.');
    }else if( bmi > 25 && bmi < 29.9 ){
        console.log('This person is overweight.');
    }else if( bmi > 30 ){
        console.log('This person is obese.');
    }else{
        console.log('Please only input weight and height in number!');
    }
    return bmi;
}

let menWeight = [90,65,78,103,88,99,50];
let menHeight = [1.75 , 2 , 1.5 , 2.3 , 2.5 , 1.2 , 3.6];
let womenWeight = [67,55,45,63,76,80,90];
let womenHeight = [1.3 , 1.5 , 1 , 2 , 1.9 , 2.3 , 1.6];

for(let i = 0;i < 7;i++){

    console.log(BMI(menWeight[i],menHeight[i]));
    console.log(BMI(womenWeight[i],womenHeight[i]));

};

function checkSeason(x){
    let month = x.toLowerCase();
    if( month == 'september' || month == 'october' || month == 'november' ){
        return 'Autumn';
    }else if( month == 'december' || month == 'january' || month == 'february' ){
        return 'Winter';
    }else if( month == 'march' || month == 'april' || month == 'may' ){
        return 'Spring';
    }else if( month == 'june' || month == 'july' || month == 'august' ){
        return 'Summer';
    }else{
        console.log('Please only enter a month!');
    };
};

console.log('This season is ' + checkSeason('September') + '.');
