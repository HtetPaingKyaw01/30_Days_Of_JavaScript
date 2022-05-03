
function validate(input){
    let inputValue = $(`.${input}`).val();
    let pattern;
    if(input == 'phone-number'){
        pattern = /^(([+]{0,1}[0-9]{3})|([0-9]{2}))[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;
    }else if(input == 'email'){
        pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }else if(input == 'first-name'){
        pattern = /^[A-Za-z0-9-\s\.]{3,16}$/
    }else if(input == 'last-name'){
        pattern = /^[A-Za-z0-9-\s\.]{3,16}$/
    }else if(input == 'password'){
        pattern = /^[A-Za-z0-9@\_-]{6,20}$/
    }else if(input == 'your-bio'){
        pattern = /^[a-z-\_]{4,20}$/
    }
    let test = pattern.test(inputValue);
    
    if(test){
        $(`.${input}`).css('border','2px solid var(--successed)');
        $(`.${input}`).css('background-color','var(--important)');
        $(`.${input}-noti`).html('');
        $(`.${input}-noti`).css('padding','0');
    }else{
        $(`.${input}`).css('border','1px solid black');
        $(`.${input}`).css('background-color','white');
        $(`.${input}-noti`).html('');
        let span = document.createElement('span');

        if(input == 'phone-number'){
            span.innerText = 'A valid phone number (+959-955-755-135)';
        }else if(input == 'email'){
            span.innerText = 'Email must be a valid address,eg.example@example.com';
        }else if(input == 'first-name'){
            span.innerText = 'First name must be alphanumeric and contain 3 - 16 characters';
        }else if(input == 'last-name'){
            span.innerText = 'Last name must be alphanumeric and contain 3 - 16 characters';
        }else if(input == 'password'){
            span.innerText = 'Password must be alphanumeric (@,_ and - are also allowed) and contain 6 - 20 characters';
        }else if(input == 'your-bio'){
            span.innerText = 'Bio must contain only letters and between 4 - 50 characters';
        }

        span.style.color = 'var(--primary)';
        $(`.${input}-noti`).css('padding','20px 0 5px 0');

        $(`.${input}-noti`).append(span);
    };
    
    console.log(check)
};

$('.phone-number').keyup( () => {
    validate('phone-number');
});

$('.email').keyup( () => {
    validate('email');
});

$('.first-name').keyup( () => {
    validate('first-name');
});

$('.last-name').keyup( () => {
    validate('last-name');
});

$('.password').keyup( () => {
    validate('password');
});

$('.your-bio').keyup( () => {
    validate('your-bio');
});