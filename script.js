// Задача 1
function buttonClick1(){
    let elem1 = document.getElementById('elem1');
    elem1.innerHTML = '<br> Ку-ку! А я <b>жирный</b>!';
}

// Задача 2
function buttonClick2(){
    let elem2 = document.getElementById('elem2');
    elem2.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}

// Задча 3
function buttonClick3(){
    let elem3 = document.getElementById('elem3')
    elem3.outerHTML = '<h3>' + elem3.innerHTML + '</h3>';
}

// Задача 4
function summ(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let result = document.getElementById('result');
    result.innerHTML = number1 + number2;
}

// Задача 5
function text(){
    let texts = document.getElementsByTagName('p');
    for (let i = 0; i < texts.length; i++){
        texts[i].innerHTML = i;
    }
}