/* 
if it's number it appends to display and to "a" variable
if it's operator it sets operator value to the corresponding operation
if it's "=" it passes the 3 args to the corresponding function and prints result
if it's "c" it clears display and a, b variables
if it's "del" it removes last number on screen

a = ""
b = ""
operator = ""

BUTTON PRESSED
    IF IT'S NUMBER
        APPEND TO DISPLAY
        IF OPERATOR = ""
            APPEND TO a AS STRING
        IF OPERATOR != ""
            APPEND TO b AS STRING
    IF IT'S DEL
        DEL()
    IF IT'S  OPERATOR AND NOT "C" AND NOT "DEL"
        OPERATOR = OPERATION
    ELSE
        CALL ERROR()

    IF IT'S EQUAL AND operator, AND a, AND b !=""
        IF a NOT NUMBER
            CONVERT a TO NUMBER
        CONVERT b TO NUMBER
        CALCULATE(operator, a, b)
            IF OPERATOR = "+" val = ADD(a,b)
            IF OPERATOR = "-" val = SUB(a,b)
            IF OPERATOR = "*" val = MULT(a,b)
            IF OPERATOR = "/" val = DIVIDE(a,b)
            IF VAL NOT NUMBER
                ERROR()
            ELSE 
                PRINT VAL
                a = VAL
                b = ""
                OPERATOR = ""

DEL()
    REMOVE LAST ITEM OF SCREEN
    IF b = ""
        REMOVE LAST a ITEM
    IF b != ""
        REMOVE LAST b ITEM

ERROR()
    PRINT "ERROR"
    PRESS C TO ENTER NEW OPERATION
    RESET a, b, operator
 */


let a = "";
let b = "";
let operator = "";
let result = "";
let calcValidator = false;
const calculator = document.querySelector("#case");
const screen = document.querySelector("#screen");
const clearButton = document.querySelector("#clearButton");
const delButton = document.querySelector("#delButton")

calculator.addEventListener("click", (e) => {
    const clickedButton = e.target
    if (clickedButton.classList.contains("calcKey") && !clickedButton.classList.contains("operator")){
        const value = clickedButton.dataset.value;
        if (calcValidator == true) {
            screen.textContent = "";
            a = "";
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
        } else if (b != ""){
            a = a.toString().slice(0,-1);
            b = "";
        };

    } else if (clickedButton.textContent == "C"){
        screen.textContent = "";
        a = "";
        b = "";

    } else if (clickedButton.classList.contains("operator") && clickedButton.dataset.value != "="){
        if (a != "" && b != ""){
            let partialResult = evaluate(operator,a,b);
            a = partialResult;
            b = "";
        };
        operator = clickedButton.textContent;

    } else if (clickedButton.dataset.value == "="){
        let partialResult = evaluate(operator,a,b);
        a = partialResult.toString();
        operator = "";
        calcValidator = true;
    };         
});

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
 