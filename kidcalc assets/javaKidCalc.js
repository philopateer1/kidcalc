let themeSelect = document.getElementById("themesChange");
themeSelect.addEventListener("change", function () {
    let changed = document.getElementById("h");
    changed.className = "theme-" + themeSelect.value;
});

let display = document.getElementById("calculator");
let answers = document.getElementById("answers");
let lastEquation = document.getElementById("lastEquation");
let amountOfAnswers=0;
function displayed(num) {
    display.value += num;
};

function calculate() {
    try {
        display.value = eval(display.value);
        answers.innerText=amountOfAnswers+=1;
        lastEquation.innerText=eval(display.value);
        if(display.value == Infinity || display.value == NaN){
            lastEquation.innerText = "ERROR";
            throw new Error();
        }
    }
    catch (error) {
        display.value = "ERROR"
    };
};

let lastResultRecall = document.getElementById("lastResultRecall");
lastResultRecall.addEventListener("click", ()=> {
    display.value=lastEquation.innerText;
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.value = "";
});

window.addEventListener("blur", () => {
    document.title = "COME BACK HERE";
});
window.addEventListener("focus", () => {
    document.title = "Oh you are back";
});

let form=document.querySelector("#form");
let userName=document.querySelector("#username");
let age=document.querySelector("#age");
let greeting=document.querySelector("#greeting");
let lifeStage=document.querySelector("#lifeStage");
form.addEventListener("submit", function formSubmit(e){
    e.preventDefault();
    console.log(userName.value);
    console.log(age.value);
    greeting.innerText=userName.value;
    if(age.value<2){
        lifeStage.innerText="An Infancy";
    }else if(age.value>=2&&age.value<4){
        lifeStage.innerText="A Toddler";
    }else if(age.value>=4&&age.value<9){
        lifeStage.innerText="In Childhood";
    }else if(age.value>=9&&age.value<21){
        lifeStage.innerText="In Adolescence";
    }else if(age.value>=21&&age.value<61){
        lifeStage.innerText="In Adulthood";
    }else if(age.value>=61&&age.value<101){
        lifeStage.innerText="Old Aged";
    }else if(age.value>=101){
        lifeStage.innerText="..... Wait bro thinks He/She is clove";
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let year = document.getElementById("year");
    year.innerHTML = currentYear;
})
