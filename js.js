let a = "";
let b = "";
let operator = "";
let result = "";
let calcValidator = false;
let dotDisabled = false;
const calculator = document.querySelector("#case");
const screen = document.querySelector("#screen");
const clearButton = document.querySelector("#clearButton");
const delButton = document.querySelector("#delButton")
const dotButton = document.querySelector("#dot");

calculator.addEventListener("click", (e) => {
    const clickedButton = e.target
    if (clickedButton.classList.contains("calcKey") && !clickedButton.classList.contains("operator")){
        const value = clickedButton.dataset.value;
        if (value == ".") {
            toggleDotKey();
        };    
        if (calcValidator == true) { //Check if a previous calculation has been done
            screen.textContent = "";
            b = "";
            calcValidator = false;
        };
        if (operator == ""){
            screen.textContent += value;
            a += value;         
        } else if (operator != "" && b == "") {
            screen.textContent = "";
            screen.textContent += value;
            b += value;
        } else if (operator != "") {
            screen.textContent += value;
            b += value;           
        };

    } else if (clickedButton.textContent == "DEL"){
        screen.textContent = screen.textContent.slice(0, -1);
        if (b == ""){
            a = a.toString().slice(0,-1);
            if (!a.includes(".") && dotDisabled){
                 toggleDotKey();
                 dotDisabled = false;
            };
        } else if (b != ""){
            a = a.toString().slice(0,-1);
            if (!a.includes(".") && dotDisabled) {
                toggleDotKey();
                dotDisabled = false;
            };
            b = "";
            calcValidator = false;
        };

    } else if (clickedButton.textContent == "C"){
        screen.textContent = "";
        a = "";
        b = "";
        toggleDotKey();

    } else if (clickedButton.classList.contains("operator") && clickedButton.dataset.value != "="){
        if (a != "" && b != ""){
            let partialResult = evaluate(operator,a,b);
            a = partialResult;
            b = "";
        };
        operator = clickedButton.textContent;
        toggleDotKey();

    } else if (clickedButton.dataset.value == "="){
        let partialResult = evaluate(operator,a,b);
        a = partialResult.toString();
        operator = "";
        calcValidator = true;
    };         
});

function toggleDotKey(){
    dotDisabled = !dotDisabled;
    if (dotDisabled == true) {
        dotButton.disabled = true;        
    } else dotButton.disabled = false; 
};

function evaluate(operator,a,b){
    if (b == ""){
        screen.textContent = "Error";
    } else {
        a = +a;
        b = +b;  
        if (operator == "+") result = add(a,b);
        if (operator == "-") result = subs(a,b);
        if (operator == "x") result = mult(a,b);
        if (operator == "÷") result = divide(a,b);
        screen.textContent = "";
        screen.textContent = round(result);
        return round(result);
    };
};

function round(number){
    let intLength = Math.round(number).toString().length;
    let numberLength = number.toString().length;
    if (intLength > 10) {
        return "Error";
    } else if (numberLength > 10){
        number = number.toFixed(10 - intLength); // avoid display overflow
        return number;
    } else return number; 
};

function add(a,b){
    return a+b;
};

function subs(a,b){
    return a-b;
};

function mult(a,b){
    return a*b;
};

function divide(a,b){
    if (b == 0) return "Error";
    else return a/b;
};
 