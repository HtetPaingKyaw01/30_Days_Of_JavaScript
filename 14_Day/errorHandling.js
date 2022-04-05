try{
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
}catch (err){
    console.log(err)
};

try{
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
}catch (err){
    console.error(err) 
}finally{
    console.log('In any case I will be executed')
};

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error: ', err.name)
    console.log('Error message: ', err.message)
} finally {
    console.log('In any case I will be executed')
}

function throwErrorExampleFun(){
    let x = prompt('Enter a number: ');
    try{
        if(x == '') throw 'Empty'
        if(isNaN(x)) throw 'Not a Number'
        x = Number(x);
        if(x < 4) throw 'Too Low'
        if(x > 10) throw 'Too High'
    }catch(err){
        console.log(err);
    };
};

throwErrorExampleFun();

let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)

let num = 10
console.log(num.toLowerCase())

// Done Day 14 Complete