// calculadora: soma, subtração, potenciação, multiplicação, divisão, raiz quadrada, seno e cos.
// by: Daniele Caroline Silva
// last update: 19/02/2021


// -----------------------------[funções calcula]-----------------------------

const calculator = function(operation, valueA, valueB) {
    return operation(valueA, valueB);
}

// função de soma:
function addition(valueA, valueB) {
    return valueA + valueB;
}

// função de subtração:
function subtraction(valueA, valueB) {
    return valueA - valueB;
}

// função de multiplicação:
function multiplication(valueA, valueB) {
    return valueA * valueB;
}

// função de divisão:
function divide(valueA, valueB){
    return valueA / valueB;
}

function pow(value, indice) {
    let pot = 1;
    for (i = 0; i < indice; i++) {
        pot = pot * value;
    }
    return pot;
}

function sqrt(value) {
    return Math.sqrt(value);
}

function sin(value) {
    var radians = value * (Math.PI / 180);
    return Math.sin(radians);
}

function cos(value) {
    var radians = value * (Math.PI / 180);
    return Math.cos(radians);
}

// -----------------------------[Menu]-----------------------------
var calculate = true;

    console.log("\n+ ------------------------ +");
    console.log("|        Calculadora       |");
    console.log("|--------------------------|");
    console.log("|(1) Adição           --> 1|");
    console.log("|(2) Subtração        --> 2|");
    console.log("|(3) Multiplicação    --> 3|");
    console.log("|(4) Divisão          --> 4|");
    console.log("|(5) Raiz quadrada    --> 5|");
    console.log("|(6) Potenciação      --> 6|");
    console.log("|(7) Seno             --> 7|");
    console.log("|(8) Cosseno          --> 8|");
    console.log("|(9) Sair             --> 9|");
    
while (calculate) {    
    let usuario = require('prompt-sync')();
    console.log("|--------------------------|");   
    userChoice = usuario("   Escolha uma operação: ");
    let valueA;
    let valueB;
    let result; 
    
    switch(userChoice) {
        case "1": // addition
            console.log("\nInsira os valores para a soma:");
            valueA = usuario("Value 1: ");
            valueB = usuario("Value 2: ");
            result = calculator(addition, parseFloat(valueA), parseFloat(valueB));
            console.log(`\nO resultado é: ${result} \n`);
            break;
    
        case "2": //subtraction
            console.log("\nInsira os valores para a subtração:");
            valueA = usuario("Value 1: ");
            valueB = usuario("Value 2: ");
            result = calculator(subtraction, parseFloat(valueA), parseFloat(valueB));
            console.log(`\nO resultado é: ${result} \n`);
            break;
    
        case "3": //multiplication
            console.log("\nInsira os valores para a multiplicação:");
            valueA = usuario("Value 1: ");
            valueB = usuario("Value 2: ");
            result = calculator(multiplication, parseFloat(valueA), parseFloat(valueB));
            console.log(`\nO resultado é: ${result} \n`);
            break;       
    
        case "4": // divide
    
        console.log("\nInsira os valores para a subtração:");
            console.log("\nInsira os valores para a divisão:");
            valueA = usuario("Value 1: ");
            valueB = usuario("Value 2: ");
            result = calculator(divide, parseFloat(valueA), parseFloat(valueB));
            console.log(`\nO resultado é: ${result} \n`);
            break;
    
        case "5": // sqrt
            console.log("\nInsira o valor para tirar a raiz quadrada:");
            valueA = usuario("Value 1: ");
            result = calculator(sqrt, parseFloat(valueA));
            console.log(`\nO resultado é: ${result} \n`);
            break;
    
        case "6": // pow
            console.log("\nInsira o valor e a potência:");
            valueA = usuario("Value 1: ");
            valueB = usuario("Value 2: ");
            result = calculator(pow, parseFloat(valueA), parseFloat(valueB));
            console.log(`\nO resultado é: ${result} \n`);   
            break;
    
        case "7": //sin
            console.log("\nInsira o ângulo em graus: ");
            valueA = usuario("Value 1: ");
            result = calculator(sin, parseFloat(valueA));
            console.log(`\nO resultado é: ${result} \n`);
            break;  
            
        case "8": //cos
            console.log("\nInsira o ângulo em graus: ");
            valueA = usuario("Value 1: ");
            result = calculator(cos, parseFloat(valueA));
            console.log(`\nO resultado é: ${result} \n`);
            break; 3
        
        case "9":
            console.log("\tEncerrando ...");
            calculate = false;
            break;

        default:
            console.log("Escolha uma opção válida");
            break;
    }    
    
}


