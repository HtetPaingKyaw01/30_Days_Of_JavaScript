let input = document.querySelector('.input');
let a;

input.addEventListener('input', () => {
    a = Number(input.value);
});

let calculate = document.querySelector('.btn');
let outputText = document.querySelector('.output-text');
let selectBox = document.querySelector('.select-box');
let planet = document.querySelector('.planet');
let planetName = document.querySelector('.planet-name');
let planetImg = document.querySelector('.planet-img');
let result = document.querySelector('.result');
let resultOutputBox = document.querySelector('.result-output-box');
let disable = document.querySelector('.disable');

let earth = 1;
let mercury = 0.38;
let venus = 0.91;
let moon = 0.166;
let mars = 0.38;
let jupiter = 2.34;
let saturn = 1.06;
let uranus = 0.92;
let neptune = 1.19;
let pluto = 0.07;

calculate.addEventListener('click',() => {
    if(a == undefined || a == 0){
        outputText.innerHTML = 'Mass is required';
        planet.classList.remove('show');
        planet.classList.add('hide');
        outputText.classList.remove('hide');
        outputText.classList.add('show');
        resultOutputBox.classList.remove('show');
        resultOutputBox.classList.add('hide');
    }else if(Number(selectBox.value) == 0){
        outputText.innerHTML = 'You did not choose a planet yet';
    }

    if(a){
        let b;
        switch(Number(selectBox.value)){
            case 1:
                b = earth;
                planetImg.setAttribute('src','./images/earth.png');
                planetName.innerHTML = 'Earth';
                break;
            case 2:
                b = jupiter;
                planetImg.setAttribute('src','./images/jupiter.png');
                planetName.innerHTML = 'Jupiter';
                break;
            case 3:
                b = mars;
                planetImg.setAttribute('src','./images/mars.png');
                planetName.innerHTML = 'Mars';
                break;
            case 4:
                b = mercury;
                planetImg.setAttribute('src','./images/mercury.png');
                planetName.innerHTML = 'Mercury';
                break;
            case 5:
                b = moon;
                planetImg.setAttribute('src','./images/moon.png');
                planetName.innerHTML = 'Moon';
                break;
            case 6:
                b = neptune;
                planetImg.setAttribute('src','./images/neptune.png');
                planetName.innerHTML = 'Neptune';
                break;
            case 7:
                b = pluto;
                planetImg.setAttribute('src','./images/pluto.png');
                planetName.innerHTML = 'Pluto';
                break;
            case 8:
                b = saturn;
                planetImg.setAttribute('src','./images/saturn.png');
                planetName.innerHTML = 'Saturn';
                break;
            case 9:
                b = uranus;
                planetImg.setAttribute('src','./images/uranus.png');
                planetName.innerHTML = 'Uranus';
                break;
            case 10:
                b = venus;
                planetImg.setAttribute('src','./images/venus.png');
                planetName.innerHTML = 'Venus';
                break;
        };
        let c = a * (b * 9.8);
        let d = c.toFixed(2) + 'N';
        result.innerHTML = d;

        if(b){
            disable.setAttribute('disabled','');
            planet.classList.remove('hide');
            planet.classList.add('show');
            outputText.classList.remove('show');
            outputText.classList.add('hide');
            resultOutputBox.classList.remove('hide');
            resultOutputBox.classList.add('show');
        }
    };
});