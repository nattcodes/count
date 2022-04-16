let body = document.querySelector('body');
let text = document.querySelector('h1');
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let counter = 0;
let clear;
let remove;

start.addEventListener('click', (e) => {
    e.preventDefault();
    
    body.style.background = 'black' //change background color to another
    text.style.color = 'white'
    

    if(start.innerHTML == 'stop') {
        clearInterval(clear); // remove/clear setInterval from the counter
        start.innerHTML = 'start'
        body.style.background = 'white'
        text.style.color = 'black'
        
        // timer();
        
        // function timer() { //blink effect on h1 text
        //     text.style.opacity = text.style.opacity == 0 ? 1: 0;
        //     remove = setTimeout(timer, 400);
        // }
        
    }else{
        clear = setInterval(value, 1000) //set setInterval on the counter
        start.innerHTML = 'stop'
        // clearTimeout(remove); //clear/remove setTimeout from the counter
    }

    function value() {
        counter++
        text.innerHTML = counter;
    }
})

reset.addEventListener('click', () => { //reset to default
    clearInterval(clear);
    start.innerHTML = 'start'
    body.style.background = 'white'
    text.style.color = 'black'
    // clearTimeout(remove);
    counter = 0;
    text.innerHTML = counter;
})

