let input1=0;
let input2=undefined;
let op = "";
let firstOp = 0;
let solved;
let userInput = "";
let thisinput = "";
let realVal;
let round= 0;
let disp;
let dotOp=0;
let equalOp=0;
let backSpaceOp="";
let backOp;
let equalError=0;
document.querySelector(".display").textContent = input1;
document.querySelector(".one").addEventListener("click" , function(){
    thisinput = "1";
    userInput += thisinput;
    document.querySelector(".display").textContent = userInput;
    realVal = Number(userInput);
    if(round==0){
        input1 = realVal;
    }
    else{
        input2 = realVal;
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "1") {
        thisinput = "1";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".two").addEventListener("click" , function(){
    thisinput = "2";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "2") {
        thisinput = "2";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".three").addEventListener("click" , function(){
    thisinput = "3";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "3") {
        thisinput = "3";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".four").addEventListener("click" , function(){
    thisinput = "4";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "4") {
        thisinput = "4";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".five").addEventListener("click" , function(){
    thisinput = "5";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "5") {
        thisinput = "5";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".six").addEventListener("click" , function(){
    thisinput = "6";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "6") {
        thisinput = "6";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".seven").addEventListener("click" , function(){
    thisinput = "7";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "7") {
        thisinput = "7";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".eight").addEventListener("click" , function(){
    thisinput = "8";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "8") {
        thisinput = "8";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".nine").addEventListener("click" , function(){
    thisinput = "9";
    userInput += thisinput;
    document.querySelector(".display").textContent = Number(userInput);
    if(round==0){
        input1 = Number(userInput);
    }
    else{
        input2 = Number(userInput);
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "9") {
        thisinput = "9";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        realVal = Number(userInput);
        if(round==0){
            input1 = realVal;
        }
        else{
            input2 = realVal;
        }
    }
});

document.querySelector(".zero").addEventListener("click" , function(){
    if(dotOp>0){
        thisinput = "0";
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        if(round==0){
        input1 = Number(userInput);
        }
        else{
        input2 = Number(userInput);
    }
    }
    else{
        document.querySelector(".display").textContent = document.querySelector(".display").textContent; 
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "0") {
        if(dotOp>0){
            thisinput = "0";
            userInput += thisinput;
            document.querySelector(".display").textContent = userInput;
            if(round==0){
            input1 = Number(userInput);
            }
            else{
            input2 = Number(userInput);
        }
        }
        else{
            document.querySelector(".display").textContent = document.querySelector(".display").textContent; 
        }
    }
  });


document.querySelector(".add").addEventListener("click" , function(){
    if(firstOp>0){
        solved = operator(op, input1, input2);
        document.querySelector(".display").textContent = solved;
        disp = solved;
        if(isNaN(disp)){
            document.querySelector(".display").innerText = input1;
            solved = input1;
        }
        input1=solved;
        input2 = undefined;
        dotOp = 0;
        equalOp = 0;
    }
    disp = document.querySelector(".display").innerText;
    op = "+";
    userInput = "";
    firstOp++;
    round=1;
    dotOp = 0;
    equalOp = 0;
    if(equalError>0){
        firstOp = 0;
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "a") {
        if(firstOp>0){
            solved = operator(op, input1, input2);
            document.querySelector(".display").textContent = solved;
            disp = solved;
            if(isNaN(disp)){
                document.querySelector(".display").innerText = input1;
                solved = input1;
            }
            input1=solved;
            input2 = undefined;
            dotOp = 0;
            equalOp = 0;
        }
        disp = document.querySelector(".display").innerText;
        op = "+";
        userInput = "";
        firstOp++;
        round=1;
        dotOp = 0;
        equalOp = 0;
        if(equalError>0){
            firstOp = 0;
        }
    }
  });

document.querySelector(".substract").addEventListener("click" , function(){
    if(firstOp>0){
        solved = operator(op, input1, input2);
        document.querySelector(".display").textContent = solved;
        disp = solved;
        if(isNaN(disp)){
            document.querySelector(".display").innerText = input1;
            solved = input1;
        }
        input1=solved;
        input2 = undefined;
        dotOp = 0;
        equalOp = 0;
    }
    disp = document.querySelector(".display").innerText;
    op = "-";
    userInput = "";
    firstOp++;
    round=1;
    dotOp = 0;
    equalOp = 0;
    if(equalError>0){
        firstOp = 0;
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "s") {
        if(firstOp>0){
            solved = operator(op, input1, input2);
            document.querySelector(".display").textContent = solved;
            disp = solved;
            if(isNaN(disp)){
                document.querySelector(".display").innerText = input1;
                solved = input1;
            }
            input1=solved;
            input2 = undefined;
            dotOp = 0;
            equalOp = 0;
        }
        disp = document.querySelector(".display").innerText;
        op = "-";
        userInput = "";
        firstOp++;
        round=1;
        dotOp = 0;
        equalOp = 0;
        if(equalError>0){
            firstOp = 0;
        }
    }
  });

document.querySelector(".multiply").addEventListener("click" , function(){
    if(firstOp>0){
        solved = operator(op, input1, input2);
        document.querySelector(".display").textContent = solved;
        disp = solved;
        if(isNaN(disp)){
            document.querySelector(".display").innerText = input1;
            solved = input1;
        }
        input1=solved;
        input2 = undefined;
        dotOp = 0;
        equalOp = 0;
    }
    disp = document.querySelector(".display").innerText;
    op = "*";
    userInput = "";
    firstOp++;
    round=1;
    dotOp = 0;
    equalOp = 0;
    if(equalError>0){
        firstOp = 0;
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "m") {
        if(firstOp>0){
            solved = operator(op, input1, input2);
            document.querySelector(".display").textContent = solved;
            disp = solved;
            if(isNaN(disp)){
                document.querySelector(".display").innerText = input1;
                solved = input1;
            }
            input1=solved;
            input2 = undefined;
            dotOp = 0;
            equalOp = 0;
        }
        disp = document.querySelector(".display").innerText;
        op = "*";
        userInput = "";
        firstOp++;
        round=1;
        dotOp = 0;
        equalOp = 0;
        if(equalError>0){
            firstOp = 0;
        }
    }
  });

document.querySelector(".divide").addEventListener("click" , function(){
    if(firstOp>0){
        solved = operator(op, input1, input2);
        document.querySelector(".display").textContent = solved;
        disp = solved;
        if(isNaN(disp)){
            document.querySelector(".display").innerText = input1;
            solved = input1;
        }
        input1=solved;
        input2 = undefined;
        dotOp = 0;
        equalOp = 0;
    }
    disp = document.querySelector(".display").innerText;
    op = "/";
    userInput = "";
    firstOp++;
    round=1;
    dotOp = 0;
    equalOp = 0;
    if(equalError>0){
        firstOp = 0;
    }
});

window.addEventListener("keydown", event => {
    if (event.key == "/") {
        if(firstOp>0){
            solved = operator(op, input1, input2);
            document.querySelector(".display").textContent = solved;
            disp = solved;
            if(isNaN(disp)){
                document.querySelector(".display").innerText = input1;
                solved = input1;
            }
            input1=solved;
            input2 = undefined;
            dotOp = 0;
            equalOp = 0;
        }
        disp = document.querySelector(".display").innerText;
        op = "/";
        userInput = "";
        firstOp++;
        round=1;
        dotOp = 0;
        equalOp = 0;
        if(equalError>0){
            firstOp = 0;
        }
    }
  });

document.querySelector(".clear").addEventListener("click" , function(){
    input1 = 0;
    input2 = undefined;
    round = 0;
    solved = undefined;
    firstOp = 0;
    userInput = "";
    document.querySelector(".display").textContent = input1;
    dotOp = 0;
    equalOp = 0;
    equalError = 0;
});

window.addEventListener("keydown", event => {
    if (event.key == "c") {
        input1 = 0;
        input2 = undefined;
        round = 0;
        solved = undefined;
        firstOp = 0;
        userInput = "";
        document.querySelector(".display").textContent = input1;
        dotOp = 0;
        equalOp = 0;
    }
  });

document.querySelector(".equal").addEventListener("click" , function(){
    if(equalOp==0){
        equalError++;
        solved = operator(op, input1, input2);
        document.querySelector(".display").textContent = solved;
        input1=solved;
        userInput = "";
        firstOp = 0;
        round=1;
        disp = document.querySelector(".display").innerText;
        equalOp++;
        if(input2 == undefined && op == ""){
            userInput = "0";
            document.querySelector(".display").textContent = userInput;
            round=0;
            userInput="";
            equalOp=0;
        }    
        if(isNaN(disp)){
        input1 = 0;
        document.querySelector(".display").textContent = input1;
        round=0;
        equalOp=0;
        }
        if(disp == Infinity){
        alert("Heei, you should not do this.")
        equalOp=0;
        }
        
    }
    else{
        disp = document.querySelector(".display").textContent;
        document.querySelector(".display").textContent = disp;

    }
});

window.addEventListener("keydown", event => {
    if (event.key == "e") {
        if(equalOp==0){
            solved = operator(op, input1, input2);
            document.querySelector(".display").textContent = solved;
            input1=solved;
            userInput = "";
            firstOp = 0;
            round=1;
            disp = document.querySelector(".display").innerText;
            equalOp++;
            if(input2 == undefined && op == ""){
                userInput = "0";
                document.querySelector(".display").textContent = userInput;
                round=0;
                userInput="";
                equalOp=0;
            }    
            if(isNaN(disp)){
            input1 = 0;
            document.querySelector(".display").textContent = input1;
            round=0;
            equalOp=0;
            }
            if(disp == Infinity){
            alert("Heei, you should not do this.")
            equalOp=0;
            }
        }
        else{
            disp = document.querySelector(".display").textContent;
            document.querySelector(".display").textContent = disp;
    
        }
    }
  });

document.querySelector(".dot").addEventListener("click" , function(){
    disp = document.querySelector(".display").textContent;
    if(dotOp==0){
        thisinput = ".";
        userInput = disp;
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        if(round==0){
            input1 = Number(userInput);
        }
        else{
            input2 = Number(userInput);
        } 
        dotOp++;
    }
    else{
        document.querySelector(".display").textContent = document.querySelector(".display").textContent;
    }
    if(isNaN(disp)){
        document.querySelector(".display").textContent = solved;
    }
})

window.addEventListener("keydown", event => {
    if (event.key == ".") {
    disp = document.querySelector(".display").textContent;
    if(dotOp==0){
        thisinput = ".";
        userInput = disp;
        userInput += thisinput;
        document.querySelector(".display").textContent = userInput;
        if(round==0){
            input1 = Number(userInput);
        }
        else{
            input2 = Number(userInput);
        } 
        dotOp++;
    }
    else{
        document.querySelector(".display").textContent = document.querySelector(".display").textContent;
    }
    if(isNaN(disp)){
        document.querySelector(".display").textContent = solved;
    }
    }
  });

document.querySelector(".backspace").addEventListener("click" , function(){
    disp = document.querySelector(".display").textContent;
    backSpaceOp = disp.substring(0, disp.length-1);
    document.querySelector(".display").textContent = backSpaceOp;
    disp = backSpaceOp;
    userInput = "";
    input1=Number(disp);
    dotOp=0;
    equalOp++;
    if(document.querySelector(".display").textContent == ""){
        document.querySelector(".display").textContent = 0;
        input1=0;
    }
})

window.addEventListener("keydown", event => {
    if (event.key == "b") {
        disp = document.querySelector(".display").textContent;
        backSpaceOp = disp.substring(0, disp.length-1);
        document.querySelector(".display").textContent = backSpaceOp;
        disp = backSpaceOp;
        userInput = "";
        input1=Number(disp);
        dotOp=0;
        equalOp++;
        if(document.querySelector(".display").textContent == ""){
            document.querySelector(".display").textContent = 0;
            input1=0;
        }
    }
  });


function add(num1 , num2){
    return(Number((num1+num2).toFixed(4)));
}

function substract(num1 , num2){
    return(Number((num1-num2).toFixed(4)));
}

function multiply(num1 , num2){
    return(Number((num1*num2).toFixed(4)));
}

function divide(num1 , num2){
    return(Number((num1/num2).toFixed(4)));
}

function operator(operator , num1 , num2){
    switch(operator){
        case "+":
            return(add(num1 , num2));
        
        case "-":
            return(substract(num1 , num2));
        
        case "*":
            return(multiply(num1 , num2));
            
        case "/":
            return(divide(num1 , num2));
    }
}




