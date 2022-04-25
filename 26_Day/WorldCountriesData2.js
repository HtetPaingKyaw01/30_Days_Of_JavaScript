const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

let totalCountries = document.querySelector('.total-countries');
let outputBox = document.querySelector('.output-box');

totalCountries.innerHTML = 'Total Number of countries: ' + countries.length;

let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let btnLeft = document.querySelector('.btn-left');
let btnCenter = document.querySelector('.btn-center');
let btnA = document.querySelectorAll('.btnA');
let input = document.querySelector('.input');
let inputIcon = document.querySelector('.input-icon');

function show1(){
    icon1.classList.add('show');
    icon1.classList.remove('hide');
    icon2.classList.add('hide');
    icon2.classList.remove('show');
}

function show2(){
    icon1.classList.add('hide');
    icon1.classList.remove('show');
    icon2.classList.add('show');
    icon2.classList.remove('hide');
}

function removeActive(){
    for(atna of btnA){
        atna.classList.remove('active');
    };
};

function ztoA(){
    let text = outputBox.innerText.split('\n');

    outputBox.innerHTML = '';

    let reverseCountry = [];
    for(let i = text.length-1;i >= 0;i--){
        reverseCountry.push(text[i]);
    };

    for(country of reverseCountry){
        let a = document.createElement('div'); 
        let c = document.createElement('div');
        let d = document.createElement('div'); 
    
        a.classList.add('placing');
        c.classList.add('bg-color-placing');
        d.style.position = 'relative';
        d.style.textAlign = 'center';
    
        if(country.split(' ').length > 1){
            let aa = country.split(' ');
            let b = document.createElement('span');
            for(let i = 0;i < aa.length;i++){
                b.innerText += aa[i] + '\t';
                b.classList.add('placing-text');
                b.style.display = 'inline-block';
                d.appendChild(b);
            }
        }else{
            let b = document.createElement('span');
            b.innerText = country;
            b.classList.add('placing-text');
            d.appendChild(b);
        }
    
        a.appendChild(c); 
        a.appendChild(d);
        outputBox.appendChild(a);
    };
}

function btnLeftFunc(a){
    let startWithCountry = [];
    for(country of countries){
        if(country.toUpperCase().startsWith(a.toUpperCase())){      
            startWithCountry.push(country);
        }
    };
    outputBox.innerHTML = '';
    for(country of startWithCountry){
        let a = document.createElement('div'); 
        let c = document.createElement('div');
        let d = document.createElement('div'); 
    
        a.classList.add('placing');
        c.classList.add('bg-color-placing');
        d.style.position = 'relative';
        d.style.textAlign = 'center';
    
        if(country.split(' ').length > 1){
            let aa = country.split(' ');
            let b = document.createElement('span');
            for(let i = 0;i < aa.length;i++){
                b.innerText += aa[i] + '\t';
                b.classList.add('placing-text');
                b.style.display = 'inline-block';
                d.appendChild(b);
            }
        }else{
            let b = document.createElement('span');
            b.innerText = country;
            b.classList.add('placing-text');
            d.appendChild(b);
        }
    
        a.appendChild(c); 
        a.appendChild(d);
        outputBox.appendChild(a);
    };
    if(icon2.classList.contains('show')){
        ztoA();
    };
}

function btnCenterFunc(a){
    let searchAnyWord = [];
    for(country of countries){
        if(country.toUpperCase().match(a.toUpperCase())){
            searchAnyWord.push(country);
        };
    };
    outputBox.innerHTML = '';
    for(country of searchAnyWord){
        let a = document.createElement('div'); 
        let c = document.createElement('div');
        let d = document.createElement('div'); 
    
        a.classList.add('placing');
        c.classList.add('bg-color-placing');
        d.style.position = 'relative';
        d.style.textAlign = 'center';
    
        if(country.split(' ').length > 1){
            let aa = country.split(' ');
            let b = document.createElement('span');
            for(let i = 0;i < aa.length;i++){
                b.innerText += aa[i] + '\t';
                b.classList.add('placing-text');
                b.style.display = 'inline-block';
                d.appendChild(b);
            }
        }else{
            let b = document.createElement('span');
            b.innerText = country;
            b.classList.add('placing-text');
            d.appendChild(b);
        }
    
        a.appendChild(c); 
        a.appendChild(d);
        outputBox.appendChild(a);
    };
    if(icon2.classList.contains('show')){
        ztoA();
    };
}

input.addEventListener('input', el => {
    let inputText = input.value;
    if(btnLeft.classList.contains('active')){    
        btnLeftFunc(inputText);
    };

    if(btnCenter.classList.contains('active')){
        btnCenterFunc(inputText);
    };
});

inputIcon.addEventListener('click', () => {
    if(btnLeft.classList.contains('active')){
        btnLeftFunc(input.value);
    }

    if(btnCenter.classList.contains('active')){
        btnCenterFunc(input.value);
    }
});

btnLeft.addEventListener('click',() => {
    removeActive();
    btnLeft.classList.add('active');
});

btnCenter.addEventListener('click',() => {
    removeActive();
    btnCenter.classList.add('active');
});

icon1.addEventListener('click',() => {
    removeActive();
    icon2.classList.add('active');
    
    ztoA();
});

icon2.addEventListener('click',() => {
    removeActive();
    icon1.classList.add('active');
    let text = outputBox.innerText.split('\n');

    outputBox.innerHTML = '';

    let reverseCountry = [];
    for(let i = text.length-1;i >= 0;i--){
        reverseCountry.push(text[i]);
    };
    for(country of reverseCountry){
        let a = document.createElement('div'); 
        let c = document.createElement('div');
        let d = document.createElement('div'); 
    
        a.classList.add('placing');
        c.classList.add('bg-color-placing');
        d.style.position = 'relative';
        d.style.textAlign = 'center';
    
        if(country.split(' ').length > 1){
            let aa = country.split(' ');
            let b = document.createElement('span');
            for(let i = 0;i < aa.length;i++){
                b.innerText += aa[i] + '\t';
                b.classList.add('placing-text');
                b.style.display = 'inline-block';
                d.appendChild(b);
            }
        }else{
            let b = document.createElement('span');
            b.innerText = country;
            b.classList.add('placing-text');
            d.appendChild(b);
        }
    
        a.appendChild(c); 
        a.appendChild(d);
        outputBox.appendChild(a);
    };
});

for(country of countries){
    let a = document.createElement('div'); 
    let c = document.createElement('div');
    let d = document.createElement('div'); 

    a.classList.add('placing');
    c.classList.add('bg-color-placing');
    d.style.position = 'relative';
    d.style.textAlign = 'center';

    if(country.split(' ').length > 1){
        let aa = country.split(' ');
        let b = document.createElement('span');
        for(let i = 0;i < aa.length;i++){
            b.innerText += aa[i] + '\t';
            b.classList.add('placing-text');
            b.style.display = 'inline-block';
            d.appendChild(b);
        }
    }else{
        let b = document.createElement('span');
        b.innerText = country;
        b.classList.add('placing-text');
        d.appendChild(b);
    }

    a.appendChild(c); 
    a.appendChild(d);
    outputBox.appendChild(a);
};
