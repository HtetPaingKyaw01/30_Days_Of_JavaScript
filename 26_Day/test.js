for(country of countries){
    let a = document.createElement('div');
    let b = document.createElement('div');
    let e = document.createElement('div');
    
    a.style.width = '130px';
    a.style.height = '130px';
    if(country.split(' ')){
        let d = country.split(' ');
        for(let i = 0;i < d.length;i++){
            let c = document.createElement('span');
            c.innerText = d[i];
            c.style.display = 'block';
            e.appendChild(c);
        };
    }
    
    e.style.textAlign = 'center';
    e.style.position = 'relative';
    a.style.backgroundImage = 'url(./images/map_image.jpg)';
    a.style.backgroundRepeat = 'no-repeat';
    a.style.backgroundSize = 'cover';
    a.style.backgroundPosition = 'center';
    a.style.display = 'flex';
    a.style.justifyContent = 'center';
    a.style.alignItems = 'center';
    a.style.margin = '0 10px 20px 10px';
    a.style.position = 'relative';
    a.style.color = 'white';
    a.style.fontWeight = 'bold';
    a.style.textTransform = 'uppercase';
    a.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
    

    b.style.backgroundColor = '#2196f3';
    b.style.opacity = '0.3';
    b.style.position = 'absolute';
    b.style.width = '100%';
    b.style.height = '100%';

    a.appendChild(b);
    a.appendChild(e);
    outputBox.appendChild(a);
}

let z = countries.filter( el => el.toLowerCase().startsWith(input.value));