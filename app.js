let div = document.querySelector('div');
let bg = document.querySelector('body');
let colors = ['blue' , 'yellow' , 'green' , 'brown' , 'pink'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    div.innerHTML += `<button onclick='changecolor(${i})'>${colors[i]}</button>`
    
}

function changecolor(i) {
    bg.style.backgroundColor=`${colors[i]}`;
    
    
}