/* Seleccionar aleatoriamente un pais */

function aleatory(num){
    return Math.floor(Math.random() * num);
}

let nation = countries[aleatory(countries.length)];

let country = nation.name;
console.log(country);
let charNum = country.length;

/* Definir el numero de letras y oportunidades */

let progressCountry = document.getElementById("progress__box");

for (let i = 0; i < charNum; i++) {
    let app = document.createElement("div");
    app.id = i;
    progressCountry.appendChild(app);
}

/* Mostrar colores */

let clues = document.getElementById("clues-colors");
let numClues = 0;

addClue();

function addClue() {
    if(numClues < 3){
        let app = document.createElement("div");
        app.className = "clues__color";
        app.style.backgroundColor = nation.color[numClues];
        clues.appendChild(app);
        numClues++;
    }
}

/* Identificar coincidencias */

let responceToUser = document.getElementById("letterAnswer");
let counterHeart = 1;
let complete = 1;
function checkLetter() {
    if(complete != charNum) {
        let condition = 0;
        let input = document.getElementById("leterInput");
        let leterInput = input.value;
        for (let i = 0; i < country.length; i++) {
            if (country[i] == leterInput) {
                responceToUser.innerText = "Letter is correct";
                putLetter(leterInput, i);
                condition = 1;
                complete++;
            }
        }
        input.value = "";
        if(condition){
            return;
        }
        responceToUser.innerText = "Letter is wrong";
        deleteHeart(counterHeart);
        counterHeart++;
        addClue();
    } else {
        completarCountry();
        winner();
    }
    
}

function deleteHeart(num){
    let heart = document.getElementById("one");
    let heart2 = document.getElementById("two");
    let heart3 = document.getElementById("three");

    if (num == 1) {
        heart.style.backgroundImage = "url('https://img.icons8.com/glyph-neue/64/000000/--broken-heart.png')";
    } else if (num == 2) {
        heart2.style.backgroundImage = "url('https://img.icons8.com/glyph-neue/64/000000/--broken-heart.png')";
    } else {
        heart3.style.backgroundImage = "url('https://img.icons8.com/glyph-neue/64/000000/--broken-heart.png')";
        gameOver(country);
    }
}

function putLetter(letter, i) {
    let div = document.getElementById(i);
    div.innerText=letter;
}

let contryOfUser = document.getElementById("countryInput");
let answerToUser = document.getElementById("countryAnswer");

function checkCountry() {
    let countryInput = document.getElementById("countryInput");
    if (country == countryInput.value) {
        answerToUser.innerText = "country is correct";
        completarCountry();
        winner();
    } else {
        answerToUser.innerText = "country is wrong: " + countryInput.value;
        countryInput.value = "";
    }
}

function completarCountry(){
    for (let i = 0; i < country.length; i++) {
        putLetter(country[i], i);
    }
}

function winner(){
    let app = document.createElement("div");
    app.className = "banner";
    let h2 = document.createElement("h2");
    h2.innerText = "WINNER";
    app.appendChild(h2);
    let p = document.createElement("p");
    p.innerText = "The country is " + country;
    app.appendChild(p);
    let a = document.createElement("a");
    a.innerText = "TRY AGAIN";
    a.className = "tryAgain";
    a.href = "./index.html";
    app.appendChild(a);
    document.body.appendChild(app);
}

function gameOver(country) {
    let app = document.createElement("div");
    app.className = "banner";
    let h2 = document.createElement("h2");
    h2.innerText = "GAME OVER";
    app.appendChild(h2);
    let p = document.createElement("p");
    p.innerText = "The country was " + country;
    app.appendChild(p);
    let a = document.createElement("a");
    a.innerText = "TRY AGAIN";
    a.className = "tryAgain";
    a.href = "./index.html";
    app.appendChild(a);
    document.body.appendChild(app);
}
