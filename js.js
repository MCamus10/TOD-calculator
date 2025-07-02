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
const calculator = document.querySelector("#numbers");
const screen = document.querySelector("#screen");
const clearButton = document.querySelector("#clearButton");
const delButton = document.querySelector("#delButton")

calculator.addEventListener("click", (e) => {
    const clickedButton = e.target
    if (clickedButton.classList.contains("calcKey") && !clickedButton.classList.contains("operator")){
        const value = clickedButton.dataset.value;
        if (operator == ""){
            screen.textContent += value;
            a += value;
        } else if (operator != "") {
            screen.textContent += value;
            b += value;
            console.log(b)
        };
    };        
});


/* clearButton.addEventListener("click", () => screen.textContent ="");

const calc = document.querySelector("#calculte");
calc.addEventListener("click", calculate);
function operate(operator, a, b) {
    if (operator == "+") add(a,b);
    if (operator == "-") subs(a,b);
    if (operator == "*") mult(a,b);
    if (operator == "/") divide(a,b);
    a = 0;
    b = 0;
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
    return a/b;
};
 */